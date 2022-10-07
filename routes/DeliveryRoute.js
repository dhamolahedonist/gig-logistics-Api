const express = require("express");
const deliveryModel = require("../models/deliveryModel");

const deliveryRoute = express.Router();

deliveryRoute.get("/", async (req, res) => {
  try {
    const user = await deliveryModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

deliveryRoute.post("/", async (req, res) => {
  const newDelivery = new deliveryModel(req.body);
  try {
    const savedDelivery = await newDelivery.save();
    res.status(200).json(savedDelivery);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = deliveryRoute;
