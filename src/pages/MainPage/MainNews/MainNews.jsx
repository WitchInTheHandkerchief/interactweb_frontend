import SingleNews from "../../../components/News/SingleNews/SingleNews";
import classes from './mainNews.module.css';

const MainNews = () =>{
    return(
        <div className={classes.news}>
            <div className="container">
                <h2>Последние новости</h2>
                <div className={classes.news__inner}>
                    <SingleNews 
                        image={'src/pages/NewsPage/assets/ogogo 1.png'} 
                        date={'6 июля'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu vulputate, venenatis eros non, egestas enim. Proin cursus vel ligula vitae convallis. Vestibulum interdum quam eget pretium iaculis. Pellentesque.'}
                        id={1}
                    />
                    <SingleNews 
                        image={'src/pages/NewsPage/assets/новости 1.png'} 
                        date={'3 июля'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu vulputate, venenatis eros non, egestas enim. Proin cursus vel ligula vitae convallis. Vestibulum interdum quam eget pretium iaculis. Pellentesque.'}
                        id={2}
                    />
                    <SingleNews 
                        image={'src/pages/NewsPage/assets/мусорка 1.png'} 
                        date={'29 июня'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu vulputate, venenatis eros non, egestas enim. Proin cursus vel ligula vitae convallis. Vestibulum interdum quam eget pretium iaculis. Pellentesque.'}
                        id={3}
                    /> 
                </div>    
            </div>     
        </div>
    );
}

export default MainNews;