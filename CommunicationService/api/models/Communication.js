/**
 * Communication.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',
  attributes: {
      
    id: { type: 'number', required: true , autoIncrement: true },
    frame_id: { type: 'number', required: true },

    text: { type: 'string', required: true },
    owner: {
      model: 'person'
    },
    comment: {
      model: 'communication'
    },
  },

};

