module.exports = {
  '/users': {
    get: {
      tags: ['CRUD operations'],
      description: 'Get users',
      operationId: 'getUsers',
      parameters: [
        {
          name: 'page',
          in: 'query',
          schema: {
            type: 'integer',
            default: 1
          },
          required: false
        }
      ],
      responses: {
        200: {
          description: 'Users were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Users'
              }
            }
          }
        }
      }
    },
    post: {
      tags: ['CRUD operations'],
      description: 'Create user',
      operationId: 'createUser',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CreateUser'
            },
            example: {
              first_name: 'Petito',
              last_name: 'asd',
              email: 'peatitoaasd@wolox.com.ar',
              password: 'asdasd123123123'
            }
          }
        },
        required: true
      },
      responses: {
        201: {
          description: 'User created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserCreated'
              },
              example: {
                id: 13,
                first_name: 'Petito',
                last_name: 'asd',
                email: 'peatitoaasd@wolox.com.ar',
                password: '$2b$08$3gJGJZqQ69lsokVONyR2h.EJ./DMnylE65UZCjtMKb.iJDfTgJlqG',
                updatedAt: '2019-10-30T17:55:53.706Z',
                createdAt: '2019-10-30T17:55:53.706Z'
              }
            }
          }
        },
        400: {
          description: 'Invalid parameters',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              },
              example: {
                message: [
                  {
                    value: 'peta.alcala@wolox.com.ar',
                    msg: 'E-mail already in use',
                    param: 'email',
                    location: 'body'
                  }
                ],
                internal_code: 'validation_error'
              }
            }
          }
        }
      }
    }
  }
};
