import { useEffect,useState } from "react";
import "./App.css";
import axios from "axios";
function ArticleApp() {
  const[article,setarticle]=useState([]);
  useEffect(() => {
 const fetchData = async () => {
   try {
     const response = await axios.get('http://localhost:4000/api/article'); 
     setarticle(response.article);
   } catch (error) {
     console.error('Error fetching data:', error);
    }
   };

   fetchData();
      }, []);

      return (
        <>
        <div className="article">
          <h1>User's Articles</h1>
          <div className="Article-description">
            
            
            {article.map((article, index) => (
            <form>
            <label for="fname">Title</label>
  <input type="text" id="fname" name="fname" value={article.title}></input>
  <label for="lname">Description</label>
  <input type="text" id="lname" name="lname" value={article.description}></input>
  <label for="lname">Author</label>
  <input type="text" id="lname" name="lname" value={article.Author}></input>
  <label for="lname">body</label>
  <input type="text" id="lname" name="lname" value={article.body}></input>
  </form>
            ))}
          
          </div>
        </div>
        </>
      );

}
export default ArticleApp;
