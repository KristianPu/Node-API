module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "Lead",
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telephone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
        }
      },
      {
        updatedAt: false,
      }
    );
}