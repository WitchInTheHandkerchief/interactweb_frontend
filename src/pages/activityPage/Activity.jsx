import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import s from './activity.css'
const ActivityPage = (props) => {
   
    return (
        <>
       <div className="main_container">
        <div className="main_usWork">
            <div className="title">
            Что мы делаем?
            </div>
            <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue risus et imperdiet tincidunt. Nullam quis placerat velit. Phasellus aliquam ultricies elit, vel sodales erat pharetra sit amet. Morbi blandit erat vel mollis bibendum. Suspendisse vitae sapien ex. Aenean iaculis faucibus arcu ut viverra. Etiam eget posuere turpis. In hac habitasse platea dictumst. Curabitur mollis et justo ac efficitur. Mauris sem ante, aliquam fermentum mollis in, venenatis at tellus. Mauris enim erat, eleifend ut egestas ac, convallis non lectus. Sed nec porta nisi, vel aliquet est. Aliquam vel risus a sem sollicitudin pretium. Phasellus mattis nisi a ligula viverra, in molestie augue molestie. Quisque aliquam laoreet purus quis vulputate. Nulla viverra tempus luctus. Duis accumsan lectus sit amet est euismod vulputate. Aliquam in ante mi. Vivamus pharetra ac libero vitae dictum. Donec blandit tincidunt eros eu porta. In tellus est, tempus eu sem at, euismod cursus ex. Donec egestas mauris.
            </div>
        </div>
        <div className="block-1">
            <div className="title__nap">
            Наши направления:
            </div>
            <div className="block-1__container">
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
        <div className="block-2">
            <div className="count">
                <div className="title__count">425</div>
                <div className="member">Волонтеров</div>
            </div>
            <div className="count">
            <div className="title__count">3255122</div>
                <div className="bill">Собрано средств в 2023г.</div>
            </div>
        </div>
        <div className="block-3">
            <div className="title__team">
            Наши команды:
            </div>
        </div>
       </div>
           
        
        </>
   )
}




export default ActivityPage; 