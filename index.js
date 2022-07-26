const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");
const morgan = require("morgan");
const { sequelize } = require("./models");
require("./config/env.config.js");
const db = require("./models");
const { leadRoutes, userRoutes } = require("./routes");
// const cronJob = require("./utils/cronjob");

const app = express();

const { PORT: port } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/lead", leadRoutes);
app.use("/", userRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.get("/", (req, res) => res.send("This is an Node.js API"));

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.sync();

    app.listen(port, () =>
      console.log(`Server running on port: http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.log("Unable to connect to the database:", error);
    process.exit(1);
  });
