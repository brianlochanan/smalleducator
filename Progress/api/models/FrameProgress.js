/**
 * FrameProgress.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    lessonId: { type: 'string', required: true },
    personId: { type: 'number', required: true },
    watchTime: { type: 'number', required: true },
  },

};
