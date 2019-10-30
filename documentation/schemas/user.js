module.exports = {
  userId: {
    type: 'integer',
    example: 7
  },
  firstName: {
    type: 'string',
    example: 'peta'
  },
  lastName: {
    type: 'string',
    example: 'alcala'
  },
  userEmail: {
    type: 'string',
    example: 'peta.alcala@wolox.com.ar'
  },
  password: {
    type: 'string',
    example: 'peta.alcala@wolox.com.ar'
  },
  createdAt: {
    type: 'date',
    example: '2019-10-30T17:55:53.706Z'
  },
  updatedAt: {
    type: 'date',
    example: '2019-10-30T17:55:53.706Z'
  },
  User: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/userId'
      },
      first_name: {
        $ref: '#/components/schemas/firstName'
      },
      last_name: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/userEmail'
      }
    }
  },
  CreateUser: {
    type: 'object',
    properties: {
      first_name: {
        $ref: '#/components/schemas/firstName'
      },
      last_name: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/userEmail'
      },
      password: {
        $ref: '#/components/schemas/password'
      }
    }
  },
  UserCreated: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/userId'
      },
      first_name: {
        $ref: '#/components/schemas/firstName'
      },
      last_name: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/userEmail'
      },
      createdAt: {
        $ref: '#/components/schemas/createdAt'
      },
      updatedAt: {
        $ref: '#/components/schemas/updatedAt'
      }
    }
  },
  Users: {
    type: 'object',
    properties: {
      users: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/User'
        }
      }
    }
  }
};
