module.exports = {
    get: {
      tags: ["Lead"],
      description: "Get lead.",
      operationId: "getLead",
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
      security: [
        {
          jwt: [],
        },
      ],
  
      responses: {
        200: {
          description: "Lead generated.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/getResponse",
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
  