const sequelize = require("../config/database");
const Space = require("./Space");
const Transaction = require("./Transaction");

module.exports = { sequelize, Space, Transaction };
