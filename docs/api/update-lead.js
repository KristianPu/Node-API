module.exports = {
    put: {
      tags: ["Lead"],
      description: "Update lead.",
      operationId: "updateLead",
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
              $ref: "#/components/schemas/id",
          },
          required: true,
          description: "A single Lead id",
      }
      ],
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
        204: {
            description: "User updated successfully.",
            content: {
              "text/html": {
                  type: "string",
                  example: "chrisnode@gmail.com, lead updated!",
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
  