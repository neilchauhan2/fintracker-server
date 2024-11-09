require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const spaceRoutes = require("./routes/spaceRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
app.use(express.json());

// Test database connection and sync models
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection error:", error));

sequelize
  .sync({ alter: true })
  .then(() => console.log("Models synchronized"))
  .catch((error) => console.error("Model sync error:", error));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/spaces", spaceRoutes);
app.use(transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
