import BoardCarousel from './BoardCarousel/BoardCarousel';
import PartnersCarousel from './PartnersCarousel/PartnersCarousel';
import classes from './aboutPage.module.css'

const AboutPage = () =>{
    return(
        <>
            <div className={classes.about}>
                <div className='container'>
                    <div className={classes.top}>
                        <h1>О нас</h1>
                    </div>
                    <div className={classes.about__inner}>
                        <div className={classes.left}>
                            <p className={classes.name}>Interact Club of Bishkek</p>
                            <p>- Это волонтёрская орагнизация, что начала свою деятельность в 2013 году под руководством ротари интернешнл бла бла абла бла бла бала лалао лоосиш ыририш ррвсо овотсвтст раррвшы рр8гсикл рылисио риыоосососоытовт ототыотм бао ыоствотс моамлльалмьальмльа. амтоатмоатмат щттамтащмто ььльатмо ттамщтущатмщутмщт щутащмаущштмаутмщутматмащтьлль. тавтмдвдвттмлдвьлм оваливлитавилва лвтатилавтилтавли.</p>
                        </div>
                        <div className={classes.background__logo}>
                            <img src="src\pages\AboutPage\assets\emblem.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.board__carousel}>
                <div className='container'>
                    <div className={classes.board__carousel__inner}>
                        <h1>Board</h1>
                        <BoardCarousel/>
                    </div>
                </div>
            </div>
            <div className={classes.board}>
                <div className='container'>
                    <div className={classes.board__inner}>
                        <h1> БОРД </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum risus. Nunc justo sem, interdum sed posuere maximus, volutpat non eros. Suspendisse potenti. Nam viverra egestas dignissim. Proin id elementum purus, id auctor sem. Donec vulputate nibh ut purus gravida tempus. Quisque accumsan augue et tristique dapibus. Etiam vitae bibendum ante. Vivamus non lacinia lectus. Aliquam et est erat. Pellentesque vel varius nunc. Morbi suscipit tincidunt mauris, et eleifend risus egestas nec. Cras justo eros, maximus sollicitudin enim vitae, pharetra eleifend tellus. Vestibulum congue sed est nec rhoncus. Ut.</p>
                    </div>
                </div>
            </div>  
            <div className={classes.partners}>
                <div className='container'>
                    <div className={classes.partners__inner}>
                        <h1>
                            Наши партнёры
                        </h1>
                        <PartnersCarousel/>
                    </div>
                </div>
            </div>     
        </>
    );
}
export default AboutPage;