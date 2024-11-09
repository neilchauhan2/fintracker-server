const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Space = sequelize.define("Space", {
  spaceId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Space;
