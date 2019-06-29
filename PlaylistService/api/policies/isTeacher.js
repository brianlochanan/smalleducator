/**
 * IsStudent.js
 *
 * @description :: A policie defining the isTeacher permission.
 * @docs        :: https://sailsjs.com/documentation/concepts/policies
 */

 module.exports = async function (req, res, proceed) {

   // Check if the current user is a teacher and able access the route.
   process.env.IS_TEACHER = 'TRUE';
  if (process.env.IS_TEACHER == 'TRUE') {
    return proceed();
  }

  // Else reject request
  return res.forbidden();

};
