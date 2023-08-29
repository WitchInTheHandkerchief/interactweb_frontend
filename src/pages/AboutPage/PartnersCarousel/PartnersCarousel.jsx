import { CarouselItem } from "./CarouselItem/CarouselItem";
import Carousel from "react-material-ui-carousel";
import PartnersItems from '../PartnersCarousel/PartnersItems.json'
import classes from '../PartnersCarousel/partnersCarousel.module.css'

const PartnersCarousel = () =>{
    return(
        <Carousel className={classes.partnersCarousel} autoPlay={false} animation="slide">
            {
                PartnersItems.map(item => <CarouselItem key={item.id} items={item}/>)
            }
        </Carousel>
    );
};

export default PartnersCarousel;