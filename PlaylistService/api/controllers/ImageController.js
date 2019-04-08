/**
 * ImageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	getImage: async function (req, res) {
		var reqFrame = req.param('id');

		var frame = await Frame.find({ where: { id: reqFrame } })
			.populate('has_image', {
				select: ['id', 'path', 'type']
			});
		return res.send(frame[0].has_image);
	},

	createImage: async function (req, res) {
		var data;
		data = {
			path: req.param('path'),
			type: req.param('type'),
			in_frame: req.param('in_frame'),
		}
		Image.create(data).fetch().exec(function (err, image) {
			if (err) return (err);
			return res.json(image);
		})
	},
};

