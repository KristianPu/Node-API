const { object } = require("joi");

module.exports = {
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          in: "header",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        registerLogin: {
          type: "object",
          properties: {
            username: {
              type: "string",
              example: "ChrisNode",
              required: true,
            },
            password: {
              type: "string",
              example: "NodeNow01",
              required: true,
            }
          }
        },
        getResponse: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
              example: "Chris",
            },
            lastName: {
              type: "string",
              example: "Node",
            },
            telephone: {
              type: "string",
              example: "019846521",
            },
            email: {
              type: "string",
              example: "Chrisnode@gmail.com",
            },
            status: {
              type: "string",
              example: "Interested",
            }
          }
        },
        getAllResponse: {
          type: "array",
          items: {
            type: "object",
            properties: {
              firstName: {
                type: "string",
                example: "Chris",
              },
              lastName: {
                type: "string",
                example: "Node",
              },
              telephone: {
                type: "string",
                example: "019846521",
              },
              email: {
                type: "string",
                example: "Chrisnode@gmail.com",
              },
              status: {
                type: "string",
                example: "Interested",
              }
            },
          },
        },
        id: {
          type: "string",
          description: "An id of a Lead",
          example: "1",
        },
        loginResponse: {
          type: "object",
          properties: {
            token: {
              type: "string",
              example:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IkFnZW50IiwiaWF0IjoxNjQ4MDQyMzgwLCJleHAiOjE2NDgwNDU5ODB9.daFqCg9AdQSsLPUjd5-xJDiGfTXcxnljAo67KiHes",
            },
          },
        },
        createUpdateLead: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
              example: "Chris",
            },
            lastName: {
              type: "string",
              example: "Py",
            },
            telephone: {
              type: "string",
              example: "089567996",
            },
            email: {
              type: "string",
              example: "chrisPy@gmail.com",
            },
            status: {
              type: "string",
              example: "Interested",
            }
          }
        },
      },
    },
  };
  