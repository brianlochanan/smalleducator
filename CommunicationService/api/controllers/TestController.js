/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

/**
* `TestController.create()`
*/
	create: async function (req, res) {
		console.log("test");
	var data;
	data = { 
		id: req.param('id'),
		email: req.param('email'), 
		username: req.param('username'),
		password: req.param('password')
	}
	Person.create(data).fetch().exec(function (err, person) {
	if (err) return (err);
		return res.json(person);
	})
	}
};

