// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { getAlbum, getAlbumPhotos } = require('./controllers/albums');
const { createUser } = require('./controllers/users');

const { userValidator } = require('./middlewares/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbum);
  app.get('/albums/:id/photos', [], getAlbumPhotos);

  app.post('/users', userValidator, createUser);
};
