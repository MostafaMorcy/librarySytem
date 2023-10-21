import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("library_system", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export const connectionDb = async() => {
  return await sequelize
    .sync()
    .then((_) => {
      console.log("DB Connected....");
    })
    .catch((error) => {
      console.log(`DB failed.. ${error}`);
    });
};
