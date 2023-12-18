import { useState, useEffect } from "react";
import axios from "axios";
import Handeledit from "../Component/Handeledit.js";
import "./Admin.css";
import { Link
 } from "react-router-dom";
const Add = () => {
  const [article, setarticle] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState([]);
  const [articles, setArticles] = useState([]);

  console.log(img);
  const fetchData = async (e) => {
    e.preventDefault();
    console.log("calling this function");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("body", body);
    formData.append("category", category);
    formData.append("img", img);

    try {
      const response = await axios.post(
        "http://localhost:8100/api/article/addarticle",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setarticle(response.data.article);
      console.log(article);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //fetch inorder to update data
  const handleDelete = async (articleId) => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");
  
    if (!confirmDelete) {
      // If the user cancels the deletion, do nothing
      return;
    }
  
    try {
      await axios.delete(`http://localhost:8100/api/article/${articleId}`);
      console.log("Article deleted successfully");
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };
  
   
  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8100/api/article/getallArticles"
      );

      setArticles(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  console.log("n2eber mshe", articles)
  return (
    <>
      <div className="article">
        <h1>User's Articles</h1>
        <div className="Article-description">
          <div className="articles-change">
            <h2>Add Article</h2>
            <form className="form" onSubmit={fetchData}>
              <label for="fname">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <label for="lname">category</label>
              <input
                type="text"
                id="category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
              <label for="lname">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <label for="lname">body</label>
              <input
                type="text"
                id="body"
                name="body"
                onChange={(e) => setBody(e.target.value)}
              ></input>

              <input
                type="file"
                id="file-img"
                name="file-img"
                onChange={(e) => setImg(e.target.files[0])}
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>{" "}
          <h2>Edit Articles</h2>
          <div className="articles-edit">
            <div></div>

            {articles.map((article) => (
  <div key={article.id}>
    <img
      src={`http://localhost:8100/${article.img}`}
      alt="Article Image"
    />
    <h2>{article.title}</h2>
    <p>Author: {article.author}</p>
    <p>Date: {article.createdAt.split("T")[0]}</p>
    <p>Category: {article.category}</p>
    <p className="body-article">Body: {article.body}</p>

    <Link to={`/edit/${article.id}`}>Edit</Link>
    
    {/* Delete button with proper onClick handling */}
    <button onClick={() => handleDelete(article.id)}>Delete</button>
  </div>
))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
