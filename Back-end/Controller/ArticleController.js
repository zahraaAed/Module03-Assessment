import Article from "../models/articleModel.js";
// 1 - add article
export const addArticle = async (req, res) => {
  const {
    title,
    category,
    body,
    author,
  } = req.body;

  try {
    const article = await Article.create({
        title,
        category,
        body,
        author,
    });

    res.status(200).json({ article, message: "article created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// 2 - get all articles
export const getAllArticles = async (req, res) => {
  try {
    const articles= await Article.findAll();
    res.status(200).json({ articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// 3 - get single article
export const getArticleById = async (req, res) => {
  const { articleId } = req.params;

  try {
    const article = await Article.findOne({ where: { articleId: articleId } });
    console.log("ArticleID:", articleId);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ article });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// 4 - delete article
export const deleteArticle = async (req, res) => {
  const { articleId } = req.params;

  try {
    const result = await Article.destroy({ where: { articleId: articleId } });
    if (result === 0) {
      return res.status(404).json({ message: "Article not deleted" });
    }

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

//5-update article
export const updateArticle = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    if (req.body) {
      const article = await Article.update(
        { ...req.body },
        { where: { articleId: articleId} }
      );
      return res
        .status(200)
        .json({ message: `article updated successfully!`, article: article });
    }
    res.status(400).json({ message: "something went wrong" });
  } catch (err) {
    console.error(err);
  }
};



