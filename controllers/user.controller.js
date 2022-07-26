const { User } = require("../models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Constants = require("../utils/constants");
const { SECRET_KEY: secretKey } = process.env;

/** 
 * Takes a password string and hashes it with sha256 
 * @param {string} password 
 * @returns 
 */
function getHashedPassword(password) {
  const hash = crypto.createHash("sha256");
  const hashData = hash.update(password, "utf-8");
  const hashedPassword = hashData.digest("hex");
  return hashedPassword;
}

const createUser = async (req, res) => {
  const { username, password } = req.body;
  const usernameTaken = await User.findOne({ where: { username } });
  const hashedPassword = getHashedPassword(password);

  if (usernameTaken) return res.status(400).send("Username already taken");

  await User.create({
    username,
    password: hashedPassword,
  });
  res
    .status(201)
    .send(` User with the username ${username} added to the database!`);
};

const deleteUser = async (req, res) => {
  // PROVJERITI ZASTO NE PRINTA SEND!
  const { id } = req.params;
  await User.destroy({
    where: {
      id,
    },
  });
  return res.status(204).send(`User with the id ${id} deleted from the database.`);
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = getHashedPassword(password);
    const user = await User.findOne({
      where: { username, password: hashedPassword },
    });
    if (!user) return res.status(401).send("Invalid username or password");

    const token = jwt.sign({ user_id: user.id, username }, secretKey, {
      expiresIn: Constants.EXPIRES_IN,
    });
    res.status(200).json({
      token,
    });
  } catch (error) {
    console.log(error);
    res.send("Server error");
  }
};

module.exports = {
  createUser,
  deleteUser,
  loginUser,
};
