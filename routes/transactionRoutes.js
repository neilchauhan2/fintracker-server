const { Router } = require("express");
const {
  createTransaction,
  fetchTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = Router();

router.post("/api/spaces/:spaceId/transactions", createTransaction);
router.get("/api/spaces/:spaceId/transactions", fetchTransactions);
router.put(
  "/api/spaces/:spaceId/transactions/:transactionId",
  updateTransaction
);
router.delete(
  "/api/spaces/:spaceId/transactions/:transactionId",
  deleteTransaction
);

module.exports = router;
