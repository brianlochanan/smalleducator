/**
 * CommunicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

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

