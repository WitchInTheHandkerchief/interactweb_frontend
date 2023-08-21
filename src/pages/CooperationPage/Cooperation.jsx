import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./cooperation.module.css";
const CooperationPage = () => {
   
    return (
        <div className={classes.main_coop}>
            <div className={classes.collaboration}>
                <div className={classes.collaboration__title}>
                    Сотрудничество с нами
                </div>
                <div className={classes.collaboration__descrp}>
                    <p>Сотрудничество — ключевой элемент нашей организации. 
                        Мы открыты для партнерства с другими волонтерскими организациями, 
                        некоммерческими учреждениями, государственными структурами и частными компаниями, 
                        разделяющими наши ценности и цели. Приглашаем вас присоединиться к нашей команде и 
                        вместе создавать благоприятное окружение для тех, кто нуждается в нашей помощи.</p>
                </div>
            </div>

            <div className={classes.assets}>
           
            </div>

            <div className={classes.collaborationWithUs}>
                <div className={classes.collaborationWithUs__title}>
                    Как начать с нами сотрудничать?
                </div>
                <div className={classes.collaborationWithUs__descrp}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam quis placerat risus, ac ornare magna. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        In nec lacus dictum, hendrerit nibh id, pretium orci. 
                        Sed sit amet dolor et urna lacinia malesuada. Curabitur placerat nec massa at consectetur. 
                        Sed arcu orci, dapibus a scelerisque sed, interdum nec nibh. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Proin nibh arcu, mollis quis ornare.</p>
                </div>
            </div>

            <div className={classes.linkTo_contacts}>
                Все доступные способы связи с нами находятся на странице <Link className={classes.link} to='/contacts'>Контакты</Link>
            </div>

            <div className={classes.collaborationWithUsAsVolunteer}>
                <div className={classes.collaborationWithUsAsVolunteer__title}>
                    Как стать нашим волонтером?
                </div>
                <div className={classes.collaborationWithUsAsVolunteer__descrp}>
                    <p>Мы всегда открыты для новых и стремительных личностей, 
                        именно поэтому мы устраиваем наборы в нашу команду два раза в год. 
                        Информация о набере выходит у нас на официальном инстаграм аккаунте и 
                        вся дальнейшая информация будет в анкете во время сборов. Желаем вам удачи!</p>
                </div>
            </div>

        </div>
       
   )
}


export default CooperationPage; 