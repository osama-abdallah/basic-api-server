"use strict";

const express = require("express");
const router = express.Router();
const { Clothes } = require("../models/index");

router.post("/clothes", async (req, res) => {
  let body = req.body;

  let newClothes = await Clothes.create(body);
  res.status(201).send(newClothes);
});

router.get("/clothes/:id", async (req, res) => {
  let { id } = req.params; //same as let id = req.params.id

  let clothing = await Clothes.findOne({
    where: {
      id: id,
    },
  });

  res.status(200).json(clothing);
});

router.get("/clothes", async (req, res) => {
  let clothes = await Clothes.findAll();

  res.status(200).send(clothes);
});

router.put("/clothes/:id", async (req, res) => {
  let { id } = req.params;
  let body = req.body;

  let renewedClothes = await Clothes.update(
    {
      body,
    },
    {
      where: {
        id: id,
      },
    }
  );

  res.status(200).send(renewedClothes);
});

router.delete("/clothes/:id", async (req, res) => {
  let { id } = req.params;

  await Clothes.destroy({
    where: {
      id: id,
    },
  });

  res.status(200).send("removedClothes");
});

module.exports = router;
