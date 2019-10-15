const albumService = require('../services/album.js');

exports.getAlbum = (_, res) => {
  const albums = albumService.getAlbums();
  albums.then(response => {
    res.status(200).send(response);
  });
};

exports.getAlbumPhotos = (req, res) => {
  const photos = albumService.getAlbumPhotos(req.params.id);
  photos.then(response => {
    res.status(200).send(response);
  });
};
