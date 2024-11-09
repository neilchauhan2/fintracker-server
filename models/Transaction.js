const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Space = require("./Space");

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  type: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  category: DataTypes.STRING,
  date: DataTypes.DATE,
  description: DataTypes.TEXT,
  spaceId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Space,
      key: "spaceId",
    },
  },
});

Transaction.belongsTo(Space, { foreignKey: "spaceId" });
Space.hasMany(Transaction, { foreignKey: "spaceId" });

module.exports = Transaction;
