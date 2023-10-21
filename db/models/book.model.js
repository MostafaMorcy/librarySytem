import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig/dbConnection.js";
import { Borrowing } from "./borrowing.model.js";

export const Book=sequelize.define('book',{
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    availableQuantity: DataTypes.INTEGER,
    shelfLocation: DataTypes.STRING,
},
{
    timestamps: false,
  })
Book.hasMany(Borrowing);