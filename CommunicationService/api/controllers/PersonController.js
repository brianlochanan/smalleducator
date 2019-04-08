/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {

	create: function(req,res) {
		var params = _.extend(req.query || {}, req.params || {}, req.body || {});

		// check if password:
		// • is a string
	    // • is at least 6 characters long
	    // • contains at least one number
	    // • contains at least one letter
	    if (!(_.isString(req.param('password')) && req.param('password').length >= 6 
			&& req.param('password').match(/[a-z]/i) && req.param('password').match(/[0-9]/))){
			return res.send(["Password is at least 6 characters long, "
				+ "contains at least one number and contains at least one letter"])
		}

		Person.create(params, function personCreated (err, createdPerson) {

			if (err) return res.send(err,500);

			res.redirect('/Person/'+ createdPerson.id);
		});
	},
};
