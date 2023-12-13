import express from "express";
import ArticleRoute from "./Routes/articleRoute.js";
import sequelize from "./config/dbconfig.js";

const app = express();
const PORT = 4000;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

sequelize.sync({force:true});
// Routes

app.use("/", ()=>{
    console.log("hello world")
});

app.use("/api/article", ArticleRoute);


app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
  
});