/**
 * Frame.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  
	id: { type: 'number', required: true , autoIncrement: true},
    display_time: { type: 'number', required: true },
	in_playlist: {
      model: 'playlist', required: true,
    },
    has_text: {
      collection: 'text',
      via: 'in_frame'
    },
    has_image: {
      collection: 'image',
      via: 'in_frame'
    },
    has_video: {
      collection: 'video',
      via: 'in_frame'
    },
  },

};

