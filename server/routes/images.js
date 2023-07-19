const express = require("express");

const router = express.Router();

const s3Controller = require("../controller/s3");
const gDriveController = require("../controller/gdrive");

router.get("/get-s3", s3Controller.getS3);
router.get("/get-gdrive", gDriveController.getGdrive);

module.exports = router;
