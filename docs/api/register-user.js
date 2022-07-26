module.exports = {
    post: {
      tags: ["User"],
      description: "Register to login.",
      operationId: "registerUser",
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/registerLogin",
            },
          },
        },
      },
  
      responses: {
        200: {
          description: "User created successfully.",
          content: {
            "text/html": {
                type: "string",
                example: "User with the username ChrisNode added to the database!",
              },
          },
        },
  
        500: {
          description: "Server error",
          content: {
            "text/html": {
              type: "string",
              example: "Server error",
            },
          },
        },
      },
    },
  };
  