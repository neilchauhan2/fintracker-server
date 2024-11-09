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

async function updateTransaction(req, res) {
  try {
    const { spaceId, transactionId } = req.params;
    const { type, amount, category, date, description } = req.body;
    const transaction = await Transaction.findOne({
      where: { id: transactionId, spaceId },
    });

    if (!transaction) {
      res.status(404).send({ error: "Transaction not found" });
      return;
    }
    await transaction.update({
      ...transaction,
      type,
      amount,
      category,
      date,
      description,
    });
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update transaction" });
  }
}

async function deleteTransaction(req, res) {
  try {
    const { spaceId, transactionId } = req.params;
    const transaction = await Transaction.findOne({
      where: { id: transactionId, spaceId },
    });

    if (!transaction) {
      res.status(404).send({ error: "Transaction not found" });
      return;
    }

    await transaction.destroy();
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete transaction" });
  }
}

module.exports = {
  createTransaction,
  fetchTransactions,
  updateTransaction,
  deleteTransaction,
};
