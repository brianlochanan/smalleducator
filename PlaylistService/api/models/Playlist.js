/**
 * Playlist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number', autoIncrement: true },
    course: { type: 'string', required: true },
    week: { type: 'string', required: true },
    has_frames: {
      collection: 'frame',
      via: 'in_playlist'
    },
  },

};

