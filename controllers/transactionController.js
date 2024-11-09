const { Transaction } = require("../models");

async function createTransaction(req, res) {
  try {
    const { spaceId } = req.params;
    const { type, amount, category, date, description } = req.body;

    const newTransaction = await Transaction.create({
      type,
      amount,
      category,
      date,
      description,
      spaceId,
    });
    res.status(201).json(newTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
}

async function fetchTransactions(req, res) {
  try {
    const { spaceId } = req.params;
    const transactions = await Transaction.findAll({
      where: { spaceId },
    });
    res.json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
}

module.exports = { createTransaction, fetchTransactions };
