const request = require('supertest');
const app = require('../../app');
const { users: User } = require('../../app/models');

const createRequest = requestParams =>
  request(app)
    .post('/users')
    .send(requestParams);

describe('Create user', () => {
  describe('when the params are OK', () => {
    const params = {
      first_name: 'PetitoOK',
      last_name: 'Petapasdasdeta',
      email: 'lalaaasdasdasdaaaOK@wolox.com.ar',
      password: 'asdasd123123123'
    };

    it('creates a new user', async () => {
      await createRequest(params);
      User.findAndCountAll().then(userCount => {
        expect(userCount.count).toEqual(1);
      });
    });

    it('returns 201 status', async () => {
      const response = await createRequest(params);
      expect(response.statusCode).toEqual(201);
    });
  });

  describe('when the params are not OK', () => {
    describe('one field required field is missing', () => {
      const params = {
        first_name: 'Petito',
        email: 'lalaaasdasdasdaaaaaala@wolox.com.ar',
        password: 'asdasd123123123'
      };

      it('does not create a new user', async () => {
        await createRequest(params);
        User.findAndCountAll().then(userCount => {
          expect(userCount.count).toEqual(0);
        });
      });

      it('returns 400 status', async () => {
        const response = await createRequest(params);
        expect(response.statusCode).toEqual(400);
      });

      it('last name has errors', async () => {
        const response = await createRequest(params);
        expect(JSON.parse(response.text).message[0].param).toEqual('last_name');
      });
    });

    describe('password has less than 8 characters', () => {
      const params = {
        first_name: 'Petito',
        last_name: 'Petito',
        email: 'lalaaasdasdasdaaaaaala@wolox.com.ar',
        password: 'asd'
      };

      it('does not create a new user', async () => {
        await createRequest(params);
        User.findAndCountAll().then(userCount => {
          expect(userCount.count).toEqual(0);
        });
      });

      it('returns 400 status', async () => {
        const response = await createRequest(params);
        expect(response.statusCode).toEqual(400);
      });

      it('password has errors', async () => {
        const response = await createRequest(params);
        expect(JSON.parse(response.text).message[0].param).toEqual('password');
      });
    });
  });
});
