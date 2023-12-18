import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Handeledit() {
  const {articleId} = useParams();

  const [values, setValues] = useState({
   
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8100/api/article/${articleId}`)
      .then((res) => {
        setValues({
          ...values,
          title: res.data.article.title,
          author: res.data.article.author,
          category: res.data.article.category,
          body: res.data.article.body,
        });

      })
      .catch((err) => console.log(err));
      console.log("this is it", articleId)
      console.log(values)

  }, [articleId]); // Added articleId and values as dependencies

  const navigate = useNavigate();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8100/api/article/update/${articleId}`, values)
      .then((res) => {
        navigate('/add');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="form" onSubmit={handleEditSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={values.category}
          onChange={(e) => setValues({ ...values, category: e.target.value })}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={values.author}
          onChange={(e) => setValues({ ...values, author: e.target.value })}
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          id="body"
          name="body"
          value={values.body}
          onChange={(e) => setValues({ ...values, body: e.target.value })}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Handeledit;
