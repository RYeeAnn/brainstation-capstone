import React from 'react'; // Don't forget to import React
import './SecondHeaderComponent.scss';
import { Link } from 'react-router-dom';

function SecondHeaderComponent() {
    const handleBackButtonClick = () => {
    };

    return (
        <section className="secondHeader">
            <Link to='/'><button className="backButton" onClick={handleBackButtonClick}>
                Back
            </button></Link>
        </section>
    );
}

export default SecondHeaderComponent;
