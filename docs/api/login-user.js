module.exports = {
    post: {
      tags: ["User"],
      description: "Login to generate a token.",
      operationId: "loginUser",
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
          description: "Login is successful. Token generated.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/loginResponse",
              },
            },
          },
        },
        400: {
          description: "Invalid username of password",
          content: {
            "text/html": {
              type: "string",
              example: "Invalid username or password",
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
  