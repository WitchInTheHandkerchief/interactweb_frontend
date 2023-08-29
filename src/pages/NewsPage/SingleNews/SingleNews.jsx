import { Link } from 'react-router-dom';
import classes from './singleNews.module.css';

const SingleNews = ({news}) =>{
    return(
        <Link to={`${news.id}`} className={classes.singleNews}>
            <h2>{news.title}</h2>
            <p>{news.date}</p>
            <div className={classes.singleNews__inner}>
                {news.image && <img className={classes.image} src={news.image} alt={news.title}/>}
                <p className={classes.text}>{news.content}</p>
            </div>
        </Link>
    );
}

export default SingleNews;