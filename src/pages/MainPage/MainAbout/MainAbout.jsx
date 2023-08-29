import classes from './mainAbout.module.css'

const AboutPage = () =>{
    return(
        <div className={classes.about}>
            <div className='container'>
                <div className={classes.top}>
                    <h1>О НАС</h1>
                </div>
                <div className={classes.about__inner}>
                    <div className={classes.left}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima error tempore, placeat ullam fugiat earum ipsa aliquid nesciunt provident porro quidem, non modi, voluptatem numquam beatae repellendus perspiciatis blanditiis.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta aliquam rerum blanditiis nam ea qui quas non veniam, rem dolores aperiam consequuntur harum saepe sapiente assumenda, odit id a? Iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quisquam fuga dolore maxime. Optio iste nam consectetur architecto pariatur animi illo saepe enim accusantium, aliquam ut cum modi amet in!</p>
                    </div>
                    <div className={classes.right}>
                        <img src="src\pages\AboutPage\assets\emblem.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutPage;