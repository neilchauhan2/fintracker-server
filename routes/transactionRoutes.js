const { Router } = require("express");
const {
  createTransaction,
  fetchTransactions,
} = require("../controllers/transactionController");

const router = Router();

router.post("/api/spaces/:spaceId/transactions", createTransaction);
router.get("/api/spaces/:spaceId/transactions", fetchTransactions);

module.exports = router;
