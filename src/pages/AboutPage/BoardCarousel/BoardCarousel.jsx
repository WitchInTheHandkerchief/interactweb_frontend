import { CarouselItem } from "./CarouselItem/CarouselItem";
import Carousel from "react-material-ui-carousel";
import BoardItems from '../BoardCarousel/BoardItems.json'
import classes from '../BoardCarousel/boardCarousel.module.css'

const BoardCarousel = () =>{
    return(
        <Carousel className={classes.boardCarousel} autoPlay={false} animation="slide">
            {
                BoardItems.map(item => <CarouselItem key={item.id} items={item}/>)
            }
        </Carousel>
    );
};

export default BoardCarousel;