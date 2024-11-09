const { Space } = require("../models");

async function createSpace(req, res) {
  try {
    const { title } = req.body;
    const newSpace = await Space.create({ title });
    res.status(201).json(newSpace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create space" });
  }
}

module.exports = { createSpace };
