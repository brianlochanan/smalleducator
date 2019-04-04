/**
 * Image.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

	id: { type: 'number', required: true , autoIncrement: true},
	id_frame: { type: 'number', required: true},
    path: { type: 'string', required: true },
    type: { type: 'string', required: true },
  },

};

