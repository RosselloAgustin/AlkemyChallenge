import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Presentational/Button';

import './HeroDetail.css';

const HeroDetail = ({ hero, teamHero, setTeamHero }) => {

    //TODO: Desesctructurar las demás propiedades. 
    const {name, image:{url}, biography:{aliases} } = hero;

    const addHero = ( hero ) => {

        if(!teamHero){
            setTeamHero([hero]);
        }else{
            setTeamHero([...teamHero, hero])
        }
        console.log(hero);
    }

    return (
        <>
        <section className="heroDetail-container">
            <div className="heroDetail-container__title">
                <h1>Detalle de Héroe</h1>
            </div>

            <div className="heroDetail-container__img">
                <img src={ url } alt="imagen" />
            </div>

            <div className="heroDetail-container__features">
                <div className="heroFeatures-container">
                    <h2>{ name }</h2>
                    <ul className="heroFeatures-container__list">
                        <li>Alias: <span>{ aliases }</span></li>
                        <li>Peso: <span>{hero.appearance.weight}</span></li>
                        <li>Altura: <span>{hero.appearance.height}</span></li>
                        <li>Color de Ojos: <span>{hero.appearance['eye-color']}</span></li>
                        <li>Color de Cabello: <span>{hero.appearance['hair-color']}</span></li>
                        <li>Lugar de Trabajo: <span>{hero.work.occupation}</span></li>
                    </ul>
                </div>
            </div>

            <div onClick={ () => { addHero(hero) } }>
                <Button title = "Agregar" type = "primary" />
            </div>
                

            <div className="seguirBuscando">
                <Link to="/search">Seguir buscando</Link>
            </div>

        </section>
        </>
    )
}

export default HeroDetail
