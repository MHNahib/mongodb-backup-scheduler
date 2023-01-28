const { Router } = require("express");
const { homecontroller } = require("../controllers");

const router = Router();

router.get("/", homecontroller);

module.exports = router;
