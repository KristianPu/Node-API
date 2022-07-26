const jwt = require("jsonwebtoken");
const { SECRET_KEY: secretKey } = process.env;

const verifyToken = (req, res, next) => {
  const bearer = req.header("Authorization");
  if (!bearer) {
    return res.status(403).send("A token is required for authentication");
  }
  const splitBearer = bearer.split(" ");
  const bearerToken = splitBearer[1];
  if (!bearerToken) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    jwt.verify(bearerToken, secretKey);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;