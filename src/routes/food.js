"use strict";

const express = require("express");
const router = express.Router();
const { Foods } = require("../models/index.js");

router.get("/foods", async (req, res) => {
  let foods = await Foods.findAll();

  res.json(foods);
});

router.get("/foods/:id", async (req, res) => {
  let { id } = req.params;

  let food = await Foods.findOne({
    where: {
      id: id,
    },
  });

  res.json(food);
});

router.post("/foods", async (req, res) => {
  let body = req.body;

  let newEntry = await Foods.create(body);

  res.status(201).send(newEntry);
});

router.put("/foods/:id", async (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let revisedFood = await Foods.update(
    {
      body,
    },
    {
      where: {
        id: id,
      },
    }
  );

  res.status(200).send(revisedFood);
});

router.delete("/foods/:id", async (req, res) => {
  let { id } = req.params;

  await Foods.destroy({
    where: {
      id: id,
    },
  });

  res.status(200).send("removedFood");
});

module.exports = router;
