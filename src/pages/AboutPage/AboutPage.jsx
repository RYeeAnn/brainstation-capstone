// AboutPage.jsx
import React from 'react';
import SecondHeaderComponent from '../../components/SecondHeaderComponent/SecondHeaderComponent';
import './AboutPage.scss';
import profileImage from '../../assets/ryan.png'; 

function AboutPage() {
    return (
        <section className="about">
            <div className="about__header">
                <SecondHeaderComponent />
            </div>
            <div className="about__content">
                <div className="about__image">
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className="about__text">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Ryan, a passionate car enthusiast and love to DIY my own vehicle. I have a deep love for cars and a strong desire to help people understand the ins and outs of vehicle maintenance.
                    </p>
                    <p>
                        My mission is to provide clear and practical information to empower car owners to take control of their vehicle's upkeep. Whether it's troubleshooting common issues or learning the basics of maintenance, I'm here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
