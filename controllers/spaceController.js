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

async function fetchSpaces(req, res) {
  try {
    const spaces = await Space.findAll();
    res.json(spaces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch spaces" });
  }
}

module.exports = { createSpace, fetchSpaces };
