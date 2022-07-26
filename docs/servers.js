const dotenv = require("dotenv");
dotenv.config();
const { HOST: host, HOST_DESCRIPTION: hostDescription } = process.env;

module.exports = {
  servers: [
    {
      url: host,
      description: hostDescription,
    },
  ],
};
