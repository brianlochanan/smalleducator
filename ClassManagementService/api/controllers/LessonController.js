/**
 * LessonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const crypto = require('crypto');
const secret = 'abcdefg';

module.exports = {

  addEnrolKeys: async function (req, res) {
    const lessonId = req.param('id');
    const amount = req.param('amount');

    // Make sure that all the params are suplied.
    if(!amount || !lessonId) {
      return res.send('please provide all arguments')
    }

    for(let i = 0; i < amount; i++) {

      // Create enroll key.
      // TODO: replace algorithm with a more robust system to exclude duplicate keys.
      const value = crypto.randomBytes(8);
      const data = {
        value: value.toString('hex'),
        belongs_to: lessonId,
      }
      await EnrollKey.create(data).fetch();
    }
    return res.json({state: "succes"});
  },

  enroll: async function (req, res) {
    const lessonId = req.param('id');
    const studentId = req.param('student');
    const key = req.param('key');

    // Make sure that all the params are suplied.
    if(!lessonId || !studentId || !key) {
      return res.send('please provide all arguments')
    }

    // Get all the keys that are in the given lesson and are the same as the given key.
    const keys = await Lesson.findOne({
      where: {id:lessonId},
    }).populate('enrollKeys').enrollKeys.filter( item => {
      if(item.value === key) {
        sails.log.info(`student ${studentId} is inrolled into ${lessonId} with key ${key}`)
        return true;
      }
    })

    // If a key is used, remove the key.
    if(keys.length > 0) {
      await Lesson.addToCollection(lessonId, 'persons', studentId);
      const ids = result.map(a => a.id);
      await EnrollKey.destroy({id: ids});
    }
    return res.send('done');
  }

};
