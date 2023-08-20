import AboutPage from "./MainAbout/MainAbout";
import MainNews from "./MainNews/MainNews";
import MainCarousel from "./Carousel/MainCarousel";

const MainPage = () =>{
    return(
        <div>
            <MainCarousel/>
            <MainNews/>
            <AboutPage/>
        </div>
    );
}

export default MainPage;