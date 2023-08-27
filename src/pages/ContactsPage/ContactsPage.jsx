import React from "react";
import classes from "./contacta.module.css";
const ContactsPage = () => {
    return(
        <>
            <div className={classes.contact_main}>
                <div className={classes.us_contact}>
                    <div className={classes.us_contact__title}>
                    Наши контакты
                    </div>
                    <div className={classes.us_contact__description}>
                    Ваши добровольные усилия могут сделать наш мир ярче и лучше. 
                    Мы ищем людей, готовых предложить свои навыки, время и доброту для помощи в различных сферах. 
                    Это может быть поддержка в повседневных делах, обучение навыкам, помощь в трудных ситуациях и многое другое. 
                    Мы ценим ваше желание делать добрые дела и с радостью примем вас в наши ряды. 
                    Не стесняйтесь звонить нам, чтобы узнать, как вы можете внести свой вклад и изменить жизни к лучшему.
                    </div>
                </div>

                <div className={classes.us_links_main}>
                    <div className={classes.links_main}>
                        <a  className={classes.link} href="mailto:interactclub2430@gmail.com">interactclub2430@gmail.com</a>
                        <a className={classes.link} href="https://www.instagram.com/interactbishkek/">Instagram</a>
                        <a className={classes.link} href="https://www.instagram.com/interactbishkek.live/">Instagram Live Page</a>
                        <a className={classes.link} href="https://www.tiktok.com/@interact.bishkek?_t=8fBbSkldm3F&_r=1">TikTok</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactsPage;