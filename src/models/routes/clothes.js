'use strict'

const express = require('express');
const router = express.Router();
const {Clothes} = require('../models/index');

router.get('/clothes'  , async (req,res)=>{

   let clothes = await Clothes.findAll();

   res.send(clothes);

});

router.get('/clothes/:id', async (req, res) => {
   let { id } = req.params;

   let clothing = await Foods.findAll({
      where: {
         id: id
      }
   });

   res.json(clothing);

});

router.post('/clothes' ,async (req ,res) =>{
   let body =req.body;
   
   let newClothes = await Clothes.create(body);
   res.send(newClothes);
});

router.put('/clothes/:id', async (req,res)=>{
 let {id} =req.params;
let body = req.body;

 let renewedClothes =await Clothes.update({
  body
   },{
      where :{
         id : id
      }
   });

   res.send(renewedClothes);

});

router.delete('/clothes/:id', async (req,res)=>{
   let {id} =req.params;

await Clothes.destroy({
        where :{
           id : id
        }
     });
  
     res.send("removedClothes");
  
  });


module.exports =router;