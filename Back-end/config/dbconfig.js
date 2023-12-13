import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ArticleApp", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: "4443",
  operatorAlias: false,
  logging: false,
  operatorsAliases: false,
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
}


export default sequelize;
