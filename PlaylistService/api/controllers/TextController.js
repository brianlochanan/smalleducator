/**
 * TextController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	getText: async function (req, res) {
		// The frame id for which you want to retrieve the associated text elements
		var reqFrame = req.param('id');

		var frame = await Frame.find({ where: { id: reqFrame } })
			.populate('has_text', {
				select: ['id', 'text_value', 'type']
			});
		return res.send(frame[0].has_text);
	},

	createText: async function (req, res) {
		var data;
		data = {
			text_value: req.param('text_value'),
			type: req.param('type'),
			in_frame: req.param('in_frame'),
		}
		// Displays the json after a sucessfull create request. Otherwise returns the error message
		Text.create(data).fetch().exec(function (err, text) {
			if (err) return (err);
			return res.json(text);
		})
	},
};

