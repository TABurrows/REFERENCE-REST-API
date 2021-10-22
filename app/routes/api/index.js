const express = require("express");
const DB = require("../../db");
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log(`[INFO] Received request ${new Date().toString()}`);
  next();
});

// define the home page route
router.get("/countries", async (req, res) => {
  try {
    const data = await DB.Select();
    if (data.length > 0) {
      res.status(200).send({ status: 200, message: "Operation complete", data });
    } else {
      res.status(200).send({ status: 200, message: "No data found" });
    }
  } catch (err) {
    console.error(`[ERROR] Caught exception with ${err.message}`);
    res.status(400).send({ status: 400, message: "Error occurred" });
  }
});

// define the about route
router.get("/countries/:a2", async (req, res) => {
  try {
    const data = await DB.SelectByAlpha2(req.params["a2"]);
    if (data.length > 0) {
      res.status(200).send({ status: 200, message: "Operation complete", data });
    } else {
      res.status(200).send({ status: 200, message: "No data found" });
    }
  } catch (err) {
    console.error(`[ERROR] Caught exception with ${err.message}`);
    res.status(400).send({ status: 400, message: "Error occurred" });
  }
});

module.exports = router;
