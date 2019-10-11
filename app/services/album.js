const axios = require('axios');

const externalAlbumsApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000
});

exports.getAlbums = async function getAlbums() {
  try {
    const response = await externalAlbumsApi.get('/albums');
    return response.data;
  } catch (error) {
    return error;
  }
};

exports.getAlbumPhotos = async function getAlbumPhotos(id) {
  try {
    // No devuelve bien filtrado
    const response = await externalAlbumsApi.get(`/albums/${id}/photos`);
    return response.data;
  } catch (error) {
    return error;
  }
};
