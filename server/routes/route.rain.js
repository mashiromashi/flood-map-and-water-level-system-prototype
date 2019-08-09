const express = require("express");
const rainModel = require("../models/model.rain");
const app = express();

app.get("/getall", async (req, res) => {
  const rainLevel = await rainModel.find({});
  try {
    res.send(rainLevel);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/insert", async (req, res) => {
  const rain = new rainModel(req.body);
  try {
    await rain.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
