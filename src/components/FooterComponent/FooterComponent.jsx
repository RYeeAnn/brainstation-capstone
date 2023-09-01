import React from 'react';
import './FooterComponent.scss';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';

function FooterComponent() {
    return (
        <section className="footer">
            <div className="footer__content">
                <p className="footer__content--description">
                    <a href="https://www.linkedin.com/in/ryeean/">
                        <img className='footer__content--icon' src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.github.com/ryeeann">
                        <img className='footer__content--icon' src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/ryeean_">
                        <img className='footer__content--icon' src={instagram} alt="Instagram" />
                    </a>
                </p>
            </div>
        </section>
    );
}

export default FooterComponent;
