/**
 * Text.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number', autoIncrement: true },
    text_value: { type: 'string', required: true },
    type: { type: 'string', required: true, isIn: ['text', 'title', 'sub_title'] },
    in_frame: {
      model: 'frame', required: true
    },
  },
};

