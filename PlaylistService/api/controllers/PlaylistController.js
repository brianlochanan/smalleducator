/**
 * PlaylistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	getPlaylist: async function(req, res) {
    	var reqPlaylist = req.param('id');
		  
	  	var playlist = await Playlist.find({
			where: { id: playlist }, select: ['course', 'week']});
	  	return res.send([playlist]);
      },
      
      getCompletePlaylist: async function(req, res) {
    	var reqPlaylist = req.param('user');

		var playlist = await Playlist.find({ where: {id:reqPlaylist}, select: [] })
		.populate('has_frames');
		return res.send([playlist[0].has_frames]);
  	}

};

