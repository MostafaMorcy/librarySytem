import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig/dbConnection.js";
import { Book } from "./book.model.js";
import { Borrower } from "./borrower.model.js";

export const Borrowing=sequelize.define('book',{
    checkoutDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
},{
    timestamps: false,
  })
Borrowing.belongsTo(Book);
Borrowing.belongsTo(Borrower);