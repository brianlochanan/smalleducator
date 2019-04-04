/**
 * Frame.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  
	id: { type: 'number', required: true , autoIncrement: true},
    id_playlist: { type: 'number', required: true },
    display_time: { type: 'number', required: true },
  },

};

