import React from 'react'
import { Link } from 'react-router-dom';

import './HeroCard.css';

const HeroCard = ({name, intelligence, strength, speed, durability, power, combat, image, id}) => {

    //const imageTest = "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg";

    return (
        <div className="hero-card-container">

            <img src={image} alt={`${name}`} /> 

            <div className="stats">

                <div className='stats-title'><Link to={`/heroe/${id}`}><h3>{name}</h3></Link></div>
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
