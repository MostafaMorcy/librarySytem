import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig/dbConnection.js";
import { Borrowing } from "./borrowing.model.js";

export const Borrower=sequelize.define('book',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    registeredDate: DataTypes.DATE,
},{
    timestamps: false,
  })
Borrower.hasMany(Borrowing);