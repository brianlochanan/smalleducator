/**
 * Person.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      
    id: { type: 'number', required: true , autoIncrement: true },
    email: { type: 'string', required: true, isEmail: true, },
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
    has_comments: {
      collection: 'communication',
      via: 'owner'
    },
  },
};
