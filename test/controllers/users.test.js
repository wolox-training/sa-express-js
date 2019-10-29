const request = require('supertest');
const app = require('../../app');
const { users: User } = require('../../app/models');

let params = {};

const createRequest = requestParams =>
  request(app)
    .post('/users')
    .send(requestParams);

describe('Create user', () => {
  describe('when the params are OK', () => {
    params = {
      first_name: 'Petito',
      last_name: 'Petapasdasdeta',
      email: 'lalaaasdasdasdaaaaaala@wolox.com.aasdjaksd',
      password: 'asdasd123123123'
    };
    const res = createRequest(params);

    it('creates a new user', async () => {
      await res;
      User.findAndCountAll().then(userCount => {
        expect(userCount.count).toEqual(1);
      });
    });

    it('returns 201 status', async () => {
      const response = await res;
      expect(response.statusCode).toEqual(201);
    });
  });

  describe('when the params are not OK', () => {
    params = {
      first_name: 'Petito',
      email: 'lalaaasdasdasdaaaaaala@wolox.com.aasdjaksd',
      password: 'asdasd123123123'
    };
    const res = createRequest(params);

    it('does not create a new user', async () => {
      await res;
      User.findAndCountAll().then(userCount => {
        expect(userCount.count).toEqual(0);
      });
    });

    it('returns 400 status', async () => {
      const response = await res;
      expect(response.statusCode).toEqual(400);
    });

    it('last name has errors', async () => {
      const response = await res;
      expect(JSON.parse(response.text).message[0].param).toEqual('last_name');
    });
  });
});
