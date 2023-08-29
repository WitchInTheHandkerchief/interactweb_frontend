import { Paper } from "@mui/material";
import classes from '../CarouselItem/carouselItem.module.css'

export const CarouselItem = ({items}) =>{
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            {
            items.map( item => 
                <Paper key={item.id} className={classes.carouselItem}>
                    <p>{item.role}</p>
                    <img src={item.image} alt="" />
                    <p>{item.fullName}</p>
                </Paper>
                )
            }

        </div>
    );
}