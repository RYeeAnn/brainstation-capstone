import React from 'react'; // Don't forget to import React
import './SecondHeaderComponent.scss';
import { Link } from 'react-router-dom';
import back from '../../assets/back-button.png'

function SecondHeaderComponent() {
    const handleBackButtonClick = () => {
    };

    return (
        <section className="secondHeader">
            <Link to='/'><img src={back} alt='Back' className="backButton" onClick={handleBackButtonClick}>
            </img></Link>
        </section>
    );
}

export default SecondHeaderComponent;
