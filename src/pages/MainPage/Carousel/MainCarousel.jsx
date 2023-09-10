import Carousel from 'react-elastic-carousel';
import classes from './mainCarousel.module.css';
const items = [
  { id: 1, backgroundImg: '/interact1.png' },
  { id: 2, backgroundImg: '/interact1.png' },
  { id: 3, backgroundImg: '/interact1.png' },
  { id: 4, backgroundImg: '/interact1.png' },
  { id: 5, backgroundImg: '/interact1.png' },
];

const CarouselItem = ({ backgroundImage }) => {
  return <div className={classes.carouselItem} style={{ backgroundImage: `url(${backgroundImage})` }} />;
};

const MainCarousel = () =>{
  return(
    <div className={classes.mainCarousel}>
      <Carousel itemsToShow={1}>
        {items.map((item) => 
          <CarouselItem key={item.id} backgroundImage={item.backgroundImg} />
        )}
      </Carousel>  
    </div>
  );
}

export default MainCarousel;
