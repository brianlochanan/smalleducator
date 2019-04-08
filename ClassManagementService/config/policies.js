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

  '*': false,
  LessonController: {
    '*': false,
    'find': true,
    'findOne': true,
    'create': 'isTeacher',
    'remove': 'isTeacher',
    'enroll': true,
    'addEnrolKeys': 'isTeacher',
  },

  CourseController: {
    '*': false,
    'find': true,
    'findOne': true,
    'create': 'isTeacher',
  },

  PersonController: {
    '*': false,
    'create': true,
  },

};
