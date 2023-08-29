import SingleNews from './SingleNews/SingleNews';
import classes from './newsPage.module.css'
import news from '../../news.json'

const NewsPage = () =>{
    return(
        <div className={classes.newsPage}>
            <div className="container">
                <h1>Новости</h1>
                <div className={classes.newsPage__inner}>
                    {news.reverse().map((news) => (
                        <SingleNews key={news.id} news={news}/>
                    ))
                    }  
                </div>
            </div>
        </div>
    );
}

export default NewsPage;