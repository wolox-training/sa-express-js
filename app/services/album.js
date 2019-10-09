const axios = require('axios');

const albumsApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000
});

exports.getAlbums = async function getAlbums() {
  try {
    const response = await albumsApi.get('/albums');
    return response.data;
  } catch (error) {
    return error;
  }
};

exports.getAlbumPhotos = async function getAlbumPhotos(id) {
  try {
    // No devuelve bien filtrado
    const response = await albumsApi.get(`/albums/${id}/photos`);
    return response.data;
  } catch (error) {
    return error;
  }
};
