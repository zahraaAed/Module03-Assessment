import { useState } from "react";
import axios from "axios";

const Add = () => {
  const [article, setarticle] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8100/api/article/addarticle",
        {
          title,
          author,
          body,
          category,
        }
      );
      setarticle(response.data.article);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (props) => {
  
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
              id="fname"
              name="fname"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label for="lname">category</label>
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
            <label for="lname">Author</label>
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
            <label for="lname">body</label>
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setBody(e.target.value)}
            ></input>

            <button
              onClick={() => {
                handleClick();
              }}
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
