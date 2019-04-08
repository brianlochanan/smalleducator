/**
 * PlaylistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	getPlaylist: async function (req, res) {
		var reqPlaylist = req.param('id');

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
		Playlist.create(data).fetch().exec(function (err, playlist) {
			if (err) return (err);
			return res.json(playlist);
		})
	},
};

