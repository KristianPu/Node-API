module.exports = {
    get: {
      tags: ["Lead"],
      description: "Get lead.",
      operationId: "getLead",
      parameters: [],
      security: [
        {
          jwt: [],
        },
      ],
  
      responses: {
        200: {
          description: "Leads generated.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/getAllResponse",
              },
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
  