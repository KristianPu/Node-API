module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "User",
      {
        username: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: false,
      }
    );
  };
  