/**
 * Person.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number',  autoIncrement: true},
  	name: { type: 'string', required: true},
  	email: { type: 'string', required: true},
    lessons: {
      collection: 'lesson',
      via: 'persons'
    }

  },

};
