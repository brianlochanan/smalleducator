/**
 * PlaylistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	getPlaylist: async function (req, res) {

		// The id from the playlist you want to retrieve
		var reqPlaylist = req.param('id');

		// Returns the requested opject
		var playlist = await Playlist.find({
			where: { id: playlist }, select: ['course', 'week']
		});
		return res.send([playlist]);
	},

	createPlaylist: async function (req, res) {
		var data;
		data = {
			course: req.param('course'),
			week: req.param('week'),
		}
		// Displays the json after a sucessfull create request. Otherwise returns the error message
		Playlist.create(data).fetch().exec(function (err, playlist) {
			if (err) return (err);
			return res.json(playlist);
		})
	},
};

