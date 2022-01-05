import React from 'react';
import './Hero.css';
import HeroListContainer from '../HeroListContainer/HeroListContainer';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-container__title">
                <h2>TU EQUIPO</h2>
            </div>

            <HeroListContainer/>


        </section>
    )
}

export default Hero;
