import { Link } from "react-router-dom";
import classes from './singleNews.module.css';

export const SingleNews = ({image, date, title, id}) =>{
    return(
        <Link to={'/news/'} className={classes.news}>
            <img src={image} alt="" />
            <p>{date}</p>
            <p>{title}</p>
        </Link>
    );
}

