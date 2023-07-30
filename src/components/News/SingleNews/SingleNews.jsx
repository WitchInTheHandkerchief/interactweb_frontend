import { Link } from "react-router-dom";
import classes from './singleNews.module.css';

const SingleNews = ({image, date, text, id}) =>{
    return(
        <Link to={'/news/' + id} className={classes.news}>
            <img src={image} alt="" />
            <p>{date}</p>
            <p>{text}</p>
        </Link>
    );
}

export default SingleNews;