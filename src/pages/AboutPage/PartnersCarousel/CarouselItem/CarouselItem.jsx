import classes from '../CarouselItem/carouselItem.module.css'

export const CarouselItem = ({items}) =>{
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            {
            items.map( item => 
                <div key={item.id} className={classes.carouselItem}>
                    <img src={item.image} alt={item.name}/>
                    <p>{item.name}</p>
                </div>
                )
            }

        </div>
    );
}