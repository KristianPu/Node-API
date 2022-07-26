module.exports = {
    post: {
      tags: ["Lead"],
      description: "Create lead.",
      operationId: "createLead",
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/createUpdateLead",
            },
          },
        },
      },
      security: [
        {
          jwt: [],
        },
      ],
  
      responses: {
        201: {
            description: "User created successfully.",
            content: {
              "text/html": {
                  type: "string",
                  example: "chrisnode@gmail.com, lead added!",
                },
            },
        },
        400: {
          description: "Invalid json",
          content: {
            "text/html": {
              type: "string",
              example: "Something is missing.",
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
  