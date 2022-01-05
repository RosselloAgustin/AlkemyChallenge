import React from 'react'

import './HeroCard.css';

const HeroCard = ({name, intelligence, strength, speed, durability, power, combat, url}) => {

    const imageTest = "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg";

    return (
        <div className="hero-card-container">

            <img src={url} alt={`${name}`} /> 

            <div className="stats">

                <h3 className='stats-title'>{name}</h3>
                <ul className="stats-list">
                    <li className="stats-list__item"><strong>Inteligencia: {intelligence} </strong> </li>
                    <li className="stats-list__item"><strong>Fuerza: {strength} </strong> </li>
                    <li className="stats-list__item"><strong>Velocidad: {speed} </strong> </li>
                    <li className="stats-list__item"><strong>Durabilidad: {durability} </strong> </li>
                    <li className="stats-list__item"><strong>Poder: {power} </strong> </li>
                    <li className="stats-list__item"><strong>Combate: {combat} </strong> </li>
                </ul>

            </div>
            
        </div>
    )
}

export default HeroCard
