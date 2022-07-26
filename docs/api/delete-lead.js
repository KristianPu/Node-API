module.exports = {
    delete: {
      tags: ["Lead"],
      description: "Delete lead.",
      operationId: "deleteLead",
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
            description: "User deleted successfully.",
            content: {
              "text/html": {
                  type: "string",
                  example: "chrisnode@gmail.com, lead deleted!",
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
  