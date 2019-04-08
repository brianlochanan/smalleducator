/**
 * IsStudent.js
 *
 * @description :: A policie defining the isStudent permission.
 * @docs        :: https://sailsjs.com/documentation/concepts/policies
 */

 module.exports = async function (req, res, proceed) {

   // check if the corrent user has acces to
   sails.log.info(`hi ${process.env.IS_TEACHER}`)
  if (!process.env.IS_TEACHER) {
    return proceed();
  }

  //--•
  // Otherwise, this request did not come from a logged-in user.
  return res.forbidden();

};
