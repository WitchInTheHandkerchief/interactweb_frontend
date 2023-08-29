import { Link } from 'react-router-dom';
import classes from './footer.module.css'

const Footer = () =>{
    return(
        <div className={classes.footer}>
            <div className='container'>
                <div className={classes.footer__inner}>
                    <div className={classes.footer__el}>
                        <h2>Волонтерство</h2>
                        <div className={classes.black_line}></div>
                        <p className={classes.footer__text}>Подать заявку</p>
                        <p className={classes.footer__text}>Обязанности</p>
                        <p className={classes.footer__text}>Направления</p>
                        <p className={classes.footer__text}>Команды</p>
                    </div>
                    <div className={classes.footer__el}>
                        <h2>Разделы</h2>
                        <div className={classes.black_line}></div>
                        <p className={classes.footer__text}>Кто мы такие</p>
                        <p className={classes.footer__text}>Сотрудничество с нами</p>
                        <p className={classes.footer__text}>Поддержите нас</p>
                    </div>
                    <div className={classes.footer__el}>
                        <h2>Быстрые ссылки</h2>
                        <div className={classes.black_line}></div>
                        <Link to='/' className={classes.footer__text}><p>Главная</p></Link>
                        <p className={classes.footer__text}>Как связаться?</p>
                        <Link to='/news' className={classes.footer__text}><p>Новости</p></Link>
                        <p className={classes.footer__text}>Что мы делаем?</p>
                    </div>
                </div>
                <div className={classes.socials}>
                    <a href="https://www.instagram.com/interactbishkek/"><img src="/instagram.png" alt="" /></a>
                    <a href="https://www.tiktok.com/@interact.bishkek"><img src="/tiktok.png" alt="" /></a>
                    <a href="#"><img src="/whatsapp.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;