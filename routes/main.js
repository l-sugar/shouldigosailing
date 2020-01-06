const express = require("express");
const router = express.Router();

const indexRouter = require("./index");
const apiRouter = require("./api");
const serviceRouter = require("./service");

router.use("/", indexRouter);
router.use("/api", apiRouter);
router.use("/service", serviceRouter);

module.exports = router;
