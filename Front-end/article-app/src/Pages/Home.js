import React, { useState, useEffect } from 'react';
import axios from 'axios';
const HomePage = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    
    try {
    
      const response = await axios.get('http://localhost:8100/api/article/getallArticles');
      
      setArticles(response.data);
      console.log(response.data)
      
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])
 
  console.log(articles)
  return (
    <div>
      <h1>Articles</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>Author: {article.author}</p>
          <p>Date: {article.createdAt.split('T')[0]}</p>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
