import React, { useState, useEffect } from 'react';
import classes from './singleNewsPage.module.css';
import { useParams } from 'react-router-dom';


const SingleNewsPage = () => {
  const { id } = useParams();

  const [currentNews, setCurrentNews] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/v1/news/${id}`);
//         const newsData = await response.json();
//         setCurrentNews(newsData);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, [id]);

  useEffect(() => {
    const newsWithId = news.find(newsItem => newsItem.id === Number(id));
    setCurrentNews(newsWithId);
  }, [id]);

  if (!currentNews) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className={classes.SingleNewsPage}>
        <h2 className={classes.header}>{currentNews.title}</h2>
        <p className={classes.date}>{currentNews.date}</p>
        <img className={classes.image} src={currentNews.image} alt="" />
        <p className={classes.text}>{currentNews.content}</p>
      </div>
    </div>
  );
};

export default SingleNewsPage;
