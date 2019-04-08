/**
 * IsStudent.js
 *
 * @description :: A policie defining the isTeacher permission.
 * @docs        :: https://sailsjs.com/documentation/concepts/policies
 */

 module.exports = async function (req, res, proceed) {

   // check if the corrent user has acces to
   process.env.IS_TEACHER = 'TRUE';
   sails.log.info(`hi ${process.env.IS_TEACHER}`)
  if (process.env.IS_TEACHER == 'TRUE') {
    return proceed();
  }

  // Otherwise, this request did not come from a user logged in as a teacher.
  return res.forbidden();

};
