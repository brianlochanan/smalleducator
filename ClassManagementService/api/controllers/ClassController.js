/**
 * ClassController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const crypto = require('crypto');
const secret = 'abcdefg';

module.exports = {

  addEnrolKeys: async function (req, res) {
    const classId = req.param('id');
    const amount = req.param('amount');

    for(let i = 0; i < amount; i++) {

      const value = crypto.randomBytes(8);
      const data = {
        value: value.toString('hex'),
        belongs_to: classId,
      }
      await EnrollKey.create(data).fetch();
    }
    return res.json({state: "succes"});
  },

  enroll: async function (req, res) {
    const classId = req.param('id');
    const studentId = req.param('student');
    const key = req.param('key');
    if(!classId || !studentId || !key) {
      return res.send('please provide all arguments')
    }

    const classes = await Class.findOne({
      where: {id:classId},
    }).populate('enrollKeys');
    const result = classes.enrollKeys.filter( item => {
      if(item.value === key) {
        sails.log.info(`student ${studentId} is inrolled into ${classId} with key ${key}`)
        return true;
      }
    })
    if(result.length > 0) {
      await Class.addToCollection(classId, 'persons', studentId);
      const ids = ;
      await EnrollKey.destroy({id: result.map(
        a => a.id)
      });
    }
    return res.json(classes);
  }

};
