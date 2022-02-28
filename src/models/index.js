'use strict'

const {Sequelize , DataTypes} = require('sequelize');
const Foods = require('./food');
const Clothes =require('./clothes');
require('dotenv').config();

const POSTGRES_URL = (process.env.DATABASE_URL);

let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }

let sequelize =new Sequelize(POSTGRES_URL ,dialectOptions);

module.exports ={
    db :sequelize,
    Foods : Foods(sequelize,DataTypes),
    Clothes:Clothes(sequelize,DataTypes)
}
