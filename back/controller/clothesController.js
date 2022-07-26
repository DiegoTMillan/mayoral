//import everything which is require
const express = require("express");
const Model = require("../model/clothesModel");
const router = express.Router();

//GET collection
router.get("/", (req, res) => {
  Model.find()
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data: [],
        error: error.message,
      });
    });
});

module.exports = router;