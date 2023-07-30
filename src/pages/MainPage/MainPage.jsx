import Carousel from "react-elastic-carousel";
import AboutPage from "../AboutPage/AboutPage";
import MainNews from "./MainNews/MainNews";
import MainCarousel from "./Carousel/MainCarousel";

const MainPage = () =>{

    const breakPoints = [
        {width: 1080, itemsToShow:1},
        {width: 550, itemsToShow:2},
        {width: 768, itemsToShow:3},
        {width: 1200, itemsToShow:4},
    ]

    return(
        <div>
            <MainCarousel/>
            <MainNews/>
            <AboutPage/>
        </div>
    );
}

export default MainPage;