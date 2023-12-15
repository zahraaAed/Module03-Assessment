import { useState } from "react";
import axios from "axios";

const Add = () => {
  const [article, setarticle] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
   const[img,setImg]=useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8100/api/article/addarticle",
        {
          title,
          author,
          body,
          category,
          img,
        }
      );
      setarticle(response.data.article);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };  

  return (
    <>
      <div className="article">
        <h1>User's Articles</h1>
        <div className="Article-description">
          <form onSubmit={fetchData}>
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
                onChange={(e) => setImg(e.target.files)}
            ></input>
            <button
        
              
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
