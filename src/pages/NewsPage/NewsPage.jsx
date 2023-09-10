import { useEffect, useState } from 'react';
import SingleNews from './SingleNews/SingleNews';
import classes from './newsPage.module.css';
import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const NewsPage = () => {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 

    const location = useLocation();
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/v1/news?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => setNewsData(data))
            .catch((error) => console.error('Error fetching news data:', error));
    }, [currentPage]);

   
    const pageSize = 3; 

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newsItemsToDisplay = newsData.slice(startIndex, endIndex);

    return (
        <div className={classes.newsPage}>
            <div className="container">
                <h1>Новости</h1>
                <div className={classes.newsPage__inner}>
                    {newsItemsToDisplay.map((news) => (
                        <SingleNews key={news.id} news={news} />
                    ))}
                </div>
                <Pagination
                    count={Math.ceil(newsData.length / pageSize)} 
                    page={currentPage}
                    onChange={(event, page) => {
                        const searchParams = new URLSearchParams(location.search);
                        searchParams.set('page', page);
                        navigate(`?${searchParams.toString()}`);
                        setCurrentPage(page); 
                    }}
                    siblingCount={0}
                    boundaryCount={2}
                />
            </div>
        </div>
    );
};

export default NewsPage;
