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
      
    //   getCompletePlaylist: async function(req, res) {
	// 	var reqPlaylist = req.param('id');
		
	// 	var playlist = await Playlist.find({ where: {id:reqPlaylist} })
	// 	.populate('has_frames');
	// 	return res.send([playlist[0].has_frames]);
	//   }
	  
	  getFrames: async function(req, res) {
		var reqPlaylist = req.param('id');

		var playlist = await Playlist.find({ where: {id:reqPlaylist}, select: [] })
		.populate('has_frames', {
			select: ['id','display_time', 'in_playlist']
		});
		return res.send(playlist[0].has_frames);
	  },

	  getText: async function(req, res) {
		var reqFrame = req.param('id');

		var frame = await Frame.find({ where: {id:reqFrame} })
		.populate('has_text', {
			select: ['id', 'text_value', 'type']
		});
		return res.send(frame[0].has_text);
	  },

	  getImage: async function(req, res) {
		var reqFrame = req.param('id');

		var frame = await Frame.find({ where: {id:reqFrame} })
		.populate('has_image', {
			select: ['id', 'path', 'type']
		});
		return res.send(frame[0].has_image);
	  },

	  getVideo: async function(req, res) {
		var reqFrame = req.param('id');

		var frame = await Frame.find({ where: {id:reqFrame} })
		.populate('has_video', {
			select: ['id', 'path', 'type']
		});
		return res.send(frame[0].has_video);
	  },
};

