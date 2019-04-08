/**
 * FrameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	getFrames: async function (req, res) {
		// The playlis id for which you want to retrieve the associated frame elements
		var reqPlaylist = req.param('id');

		// Returns the frames associated with the playlist
		var playlist = await Playlist.find({ where: { id: reqPlaylist }, select: [] })
			.populate('has_frames', {
				select: ['id', 'display_time', 'in_playlist']
			});
		return res.send(playlist[0].has_frames);
	},

	createFrame: async function (req, res) {
		var data;
		data = {
			display_time: req.param('display_time'),
			in_playlist: req.param('in_playlist'),
		}
		// Displays the json after a sucessfull create request. Otherwise returns the error message
		Frame.create(data).fetch().exec(function (err, frame) {
			if (err) return (err);
			return res.json(frame);
		})
	},
};

