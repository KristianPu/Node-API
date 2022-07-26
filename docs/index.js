const basicInfo = require("./basicInfo");
const components = require("./components");
const tags = require("./tags");
const api = require("./api");
const servers = require("./servers");

module.exports = {
  ...basicInfo,
  ...components,
  ...tags,
  ...api,
  ...servers,
};