import React from 'react'

import "./PowerStats.css"

const PowerStats = () => {
    return (
        <div className="stats-total-container">
            <div className="stats-total-container-list">
                <h2>POWERSTATS DE TU EQUIPO</h2>
                <ul>
                    <li className="stats-total-container-list__stat"><strong>Inteligencia: </strong></li>
                    <li className="stats-total-container-list__stat"><strong>Fuerza: </strong></li>
                    <li className="stats-total-container-list__stat"><strong>Velocidad: </strong></li>
                    <li className="stats-total-container-list__stat"><strong>Durabilidad: </strong></li>
                    <li className="stats-total-container-list__stat"><strong>Poder: </strong></li>
                    <li className="stats-total-container-list__stat"><strong>Combate: </strong></li>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default PowerStats
