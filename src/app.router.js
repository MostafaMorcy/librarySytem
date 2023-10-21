import { connectionDb } from "../db/dbConfig/dbConnection.js"

export const initApp=(app,express)=>{
app.use(express.json())
connectionDb()







app.all("*", (req, res, next) => {
    next(new AppError(`can't find this route:${req.originalUrl}`, 404));
  });
}