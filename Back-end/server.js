import express from "express";
import ArticleRoute from "./Routes/articleRoute.js";
import sequelize from "./config/dbconfig.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 8100;

app.use(cors());
sequelize.sync();

// Use body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     console.error('Bad JSON:', err.message);
//     res.status(400).json({ message: 'Bad JSON' });
//   } else {
//     next();
//   }
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/article", ArticleRoute);

// app.use((req, res, next) => {
//   let data = '';

//   req.on('data', (chunk) => {
//     data += chunk;
//   });

//   req.on('end', () => {
//     console.log('Raw Request Body:', data);
//     next();
//   });
// });



app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
