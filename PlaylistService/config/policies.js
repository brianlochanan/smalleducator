/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

    // By default, require requests to come from a logged-in user
    // (runs the policy in api/policies/isLoggedIn.js)

    // Only let teachers create and delete playlists with custom functions and
    // Sails build-in functions.
  '*': false,
  PlaylistController: {
    '*': false,
    'createPlaylist': 'isTeacher',
    'getPlaylist': true,
    'create': 'isTeacher',
    'remove': 'isTeacher',
    'find': true,
    'findOne': true,
  },

    // Only let teachers create and delete frames with custom functions and
    // Sails build-in functions.
  FrameController: {
    '*': false,
    'createFrame': 'isTeacher',
    'getFrames': true,
    'create': 'isTeacher',
    'remove': 'isTeacher',
    'find': true,
    'findOne': true,
  },
  
    // Only let teachers create and delete images with custom functions and
    // Sails build-in functions.
  ImageController: {
    '*': false,
    'createImage': 'isTeacher',
    'getImage': true,
    'create': 'isTeacher',
    'remove': 'isTeacher',
    'find': true,
    'findOne': true,
  },
  
    // Only let teachers create and delete text with custom functions and
    // Sails build-in functions.
    TextController: {
    '*': false,
    'createText': 'isTeacher',
    'getText': true,
    'create': 'isTeacher',
    'remove': 'isTeacher',
    'find': true,
    'findOne': true,
  },
  
    // Only let teachers create and delete videos with custom functions and
    // Sails build-in functions.
  VideoController: {
    '*': false,
    'createVideo': 'isTeacher',
    'getVideo': true,
    'create': 'isTeacher',
    'remove': 'isTeacher',
    'find': true,
    'findOne': true,
  },


};
