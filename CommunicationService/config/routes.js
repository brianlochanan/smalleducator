/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // check if ip is banned
  '*': function(req, res, next) {

    var read = require('read-file');
    var ip = require('ip');

    var ip_banned = ["Your IP: " + ip.address() + " is permanently banned. "
              + "Please contact the admnistrator for more information."];
    
    // read blacklist
    var buffer = "" + read.sync('ip_addresses.txt');
    var ip_addresses = buffer.split(" ");

    // if in blacklist, then return banned json response
    for (var i = ip_addresses.length - 1; i >= 0; i--) {
      if(ip.address() === ip_addresses[i]){
        return res.send(ip_banned);
      }
    }

    //else check other routes
    next();
  },
  '/': { view: 'pages/homepage' },
  'get /findComment': 'CommunicationController.findComment',
  'get /findCommentForUser': 'CommunicationController.findCommentForUser',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
