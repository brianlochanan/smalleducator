/**
 * CommunicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports =  {

	create: async function(req,res) {
		var params = _.extend(req.query || {}, req.params || {}, req.body || {});

		// honeypot implementation, ban ip address
		if (req.param('bot_comment')){

			var read = require('read-file');
			var ip = require('ip');
			var writeFile = require('write');

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

			// write ip to blacklist
			writeFile('ip_addresses.txt', buffer+ip.address() + " ", function(err) {
			  if (err) console.log(err);
			});

			return res.send(ip_banned);
		}

		// create comment
		await Communication.create(params).fetch();

		res.redirect('/Communication/'+ req.param('id'));
	},

	findComment: async function(req, res) {
		var reqComment = req.param('comment');
		  
		var comment = await Communication.find({
			where: { id: reqComment }});
		return res.send([comment[0].text]);
	},

	findCommentForUser: async function(req, res) {
		var reqUser = req.param('user');

		var comment = await Person.find({ where: {id:reqUser}, select: [] })
		.populate('has_comments', {
			select: ['text']
		});
		return res.send([comment[0].has_comments]);
	}

};

