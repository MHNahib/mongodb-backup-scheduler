const { Router } = require("express");
const { backupAsGzipController } = require("../controllers");

const router = Router();

router.get("/zip", backupAsGzipController);

module.exports = router;
