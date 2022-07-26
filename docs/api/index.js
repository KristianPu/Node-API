const createLead = require("./create-lead");
const deleteLead = require("./delete-lead");
const getLead = require("./get-lead");
const getLeads = require("./get-leads");
const loginUser = require("./login-user");
const registerUser = require("./register-user");
const updateLead = require("./update-lead");

module.exports = {
  paths: {
    "/login": {
      ...loginUser,
    },
    "/register": {
      ...registerUser,
    },
    "/lead/getAll": {
      ...getLeads,
    },
    "/lead/getOne/{id}": {
      ...getLead,
    },
    "/lead/create": {
      ...createLead,
    },
    "/lead/update/{id}": {
      ...updateLead,
    },
    "/lead/deleteOne/{id}": {
      ...deleteLead,
    },
  },
};
