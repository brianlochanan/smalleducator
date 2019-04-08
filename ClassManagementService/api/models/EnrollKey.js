/**
 * EnrollKey.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number',  autoIncrement: true},
    value: { type: 'string', required: true},
    belongs_to: {
      model: 'lesson'
    }

  },

};
