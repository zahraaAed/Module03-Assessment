
import express from "express";
import {getAllArticles,getArticleById,deleteArticle, addArticle  } from "../Controller/ArticleController.js";

const router = express.Router();


router.get("/getallArticles", getAllArticles);
router.get('/:articleId', getArticleById);
router.delete('/:articleId', deleteArticle);
router.post("/addarticle",addArticle);

export default router;
