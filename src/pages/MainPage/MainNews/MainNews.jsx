import {SingleNews} from "../../../components/News/SingleNews/SingleNews";
import classes from './mainNews.module.css';

const MainNews = () =>{

    const news = [
        {
            "id": 1,
            "title": "Тест1",
            "date": "2023-07-28",
            "image": null,
            "content": "nsajolkhrqw"
        },
        {
            "id": 2,
            "title": "Тест44",
            "date": "2023-07-28",
            "image": "https://www.belta.by/images/storage/news/with_archive/2021/000029_1631708765_459951_big.jpg",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde praesentium molestiae illo culpa porro ipsum totam repudiandae. Voluptatem perferendis soluta veritatis voluptas non consequatur necessitatibus modi odio, tenetur ex quidem."
        },
        {
            "id": 3,
            "title": "Заголовок",
            "date": "2023-07-31",
            "image": "http://127.0.0.1:8000/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg",
            "content": "ыфвуц"
        },
        {
            "id": 4,
            "title": "Тест1",
            "date": "2023-07-28",
            "image": null,
            "content": "nsajolkhrqw"
        },
        {
            "id": 5,
            "title": "Тест44",
            "date": "2023-07-28",
            "image": "https://www.belta.by/images/storage/news/with_archive/2021/000029_1631708765_459951_big.jpg",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde praesentium molestiae illo culpa porro ipsum totam repudiandae. Voluptatem perferendis soluta veritatis voluptas non consequatur necessitatibus modi odio, tenetur ex quidem."
        },
        {
            "id": 6,
            "title": "Заголовок",
            "date": "2023-07-31",
            "image": "http://127.0.0.1:8000/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg",
            "content": "ыфвуц"
        }
    ];
    

    return(
        <div className={classes.news}>
            <div className="container">
                <h2>Последние новости</h2>
                <div className={classes.news__inner}>
                    {news.sort((a, b) => b.id - a.id).slice(0, 3).map((news) => (
                            <SingleNews key={news.id} image={news.image} date={news.date} id={news.id} title={news.title}/>
                        ))
                    }  
                </div>    
            </div>     
        </div>
    );
}

export default MainNews;