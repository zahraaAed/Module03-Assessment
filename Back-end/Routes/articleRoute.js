import { Router } from 'express';
const router = Router();
import { addArticle, deleteArticle, getAllArticles, getArticleById } from '../Controller/ArticleController.js';

router.get('/', getAllArticles);
router.get('/:id',getArticleById);
router.post('/addarticle',addArticle);
router.delete('/delete/:id',deleteArticle);
export default router;