import React from 'react'; // Don't forget to import React
import './SecondHeaderComponent.scss';
import { Link } from 'react-router-dom';
import back from '../../assets/back.png'
import { bubble as Menu } from "react-burger-menu";

function SecondHeaderComponent({headerClass}) {
    const handleBackButtonClick = () => {
    };

    return (
        <section className={headerClass}>
            <Link to='/'><img src={back} alt='Back' className="backButton" onClick={handleBackButtonClick}>
            </img></Link>
        </section>
    );
}

export default SecondHeaderComponent;
