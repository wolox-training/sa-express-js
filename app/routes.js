// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { getAlbum, getAlbumPhotos } = require('./controllers/albums');
const { createUser } = require('./controllers/users');

const { userValidator } = require('./validators/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbum);
  app.get('/albums/:id/photos', [], getAlbumPhotos);

  app.post('/users', userValidator, createUser);

  // app.get('/endpoint/get/path', validateBla, controller.methodGET);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
