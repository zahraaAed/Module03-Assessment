// ArticleTable.js
import React from "react";

const ArticleTable = ({ articles, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Category</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article.id}>
            
            <td>{article.title}</td>
            <td>{article.author}</td>
            <td>{article.createdAt.split("T")[0]}</td>
            <td>{article.category}</td>
            <td>{article.body}</td>
            {/* <td>
              <button onClick={() => onEdit(article.id)}>Edit</button>
              <button onClick={() => onDelete(article.id)}>Delete</button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticleTable;
