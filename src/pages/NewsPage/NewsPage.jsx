import SingleNews from './SingleNews/SingleNews';
import classes from './newsPage.module.css'

const NewsPage = () =>{

    const news = [
        {
            "id": 2,
            "title": "Тест1",
            "date": "2023-07-28",
            "image": null,
            "content": "nsajolkhrqw"
        },
        {
            "id": 1,
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
        }
    ];

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