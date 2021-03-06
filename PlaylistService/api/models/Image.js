/**
 * Image.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number', autoIncrement: true },
    path: { type: 'string', required: true },
    type: { type: 'string', required: true, isIn: ['web', 'web-background', 'local', 'local-background'] },
    in_frame: {
      model: 'frame', required: true
    },
  },
};

