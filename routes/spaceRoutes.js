const { Router } = require("express");
const { createSpace } = require("../controllers/spaceController");

const router = Router();

router.post("/", createSpace);

module.exports = router;
