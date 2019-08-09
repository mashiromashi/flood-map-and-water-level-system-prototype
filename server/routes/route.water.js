const express = require("express");
const waterModel = require("../models/model.water");
const app = express();

app.get("/getall", async (req, res) => {
  const waterLevel = await waterModel.find({});
  try {
    res.send(waterLevel);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/insert", async (req, res) => {
  const water = new waterModel(req.body);
  try {
    await water.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
