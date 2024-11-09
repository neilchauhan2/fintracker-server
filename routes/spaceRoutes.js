const { Router } = require("express");
const { createSpace, fetchSpaces } = require("../controllers/spaceController");

const router = Router();

router.post("/", createSpace);
router.get("/", fetchSpaces);

module.exports = router;
