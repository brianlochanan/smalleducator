/**
 * Course.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number',  autoIncrement: true},
  	name: { type: 'string', required: true},
    enrollKeys: {
      collection: 'enrollKey',
      via: 'belongs_to'
    },
    enrollKeys: {
      collection: 'lesson',
      via: 'course'
    },

  },

};
