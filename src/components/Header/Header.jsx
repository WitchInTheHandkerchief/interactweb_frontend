import { Link } from 'react-router-dom';
import classes from './header.module.css'

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.header_top}>
                <img className = {classes.logo} src="/logo.png" alt="" />
                <div className={classes.language}>
                    Русский | English
                </div>
            </div>
            <div className={classes.header_bottom}>
                <ul className={classes.nav}>
                    <Link className={classes.link} to='/'><img src="/home.png" alt="" /></Link>
                    <div className={classes.stripe}></div>
                    <Link className={classes.link} to='/news'>новости</Link>
                    <div className={classes.stripe}></div>
                    <Link className={classes.link} to='/activity'>деятельность</Link>
                    <div className={classes.stripe}></div>
                    <Link className={classes.link} to='/cooperation'>сотрудничество</Link> 
                    <div className={classes.stripe}></div>
                    <Link className={classes.link} to='/about'>о нас</Link>
                    <div className={classes.stripe}></div>
                    <Link className={classes.link} to='/contacts'>контакты</Link>
                    <div className={classes.stripe}></div>
                    <Link className={classes.link} to='/help'>помощь</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;