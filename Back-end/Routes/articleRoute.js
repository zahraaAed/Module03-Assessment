
import express from "express";
import {getAllArticles,getArticleById,deleteArticle, addArticle, updateArticle  } from "../Controller/ArticleController.js";
import upload from "../multer.js";
const router = express.Router();


router.get("/getallArticles", getAllArticles);
router.get('/:articleId', getArticleById);
router.delete('/:articleId', deleteArticle);
router.post("/addarticle",upload.single('img'),addArticle);
router.patch("/update/:articleId",upload.single('img'),updateArticle)
export default router;
