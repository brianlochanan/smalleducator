/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	getVideo: async function (req, res) {
		var reqFrame = req.param('id');

		var frame = await Frame.find({ where: { id: reqFrame } })
			.populate('has_video', {
				select: ['id', 'path', 'type']
			});
		return res.send(frame[0].has_video);
	},

	createVideo: async function (req, res) {
		var data;
		data = {
			path: req.param('path'),
			type: req.param('type'),
			in_frame: req.param('in_frame'),
		}
		Video.create(data).fetch().exec(function (err, video) {
			if (err) return (err);
			return res.json(video);
		})
	},
};

