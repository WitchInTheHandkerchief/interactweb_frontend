import Carousel from 'react-elastic-carousel';
import classes from './mainCarousel.module.css';

const items = [
  { id: 1, backgroundColor: '#ff6961' },
  { id: 2, backgroundColor: '#77dd77' },
  { id: 3, backgroundColor: '#aec6cf' },
  { id: 4, backgroundColor: '#f49ac2' },
  { id: 5, backgroundColor: '#ffd700' },
];

const CarouselItem = ({ backgroundColor }) => {
    return <div className={classes.carouselItem} style={{ backgroundColor }} />;
};

const MainCarousel = () =>{
  return(
    <div className={classes.mainCarousel}>
      <Carousel itemsToShow={1}>
        {items.map((item) => 
          <CarouselItem key={item.id} backgroundColor={item.backgroundColor} />
        )}
      </Carousel>  
    </div>
  );
}

export default MainCarousel;
