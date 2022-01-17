import React from 'react'

import HeroListContainer from '../../Components/HeroListContainer/HeroListContainer';

import './Home.css';

const Home = ({teamHero, setTeamHero}) => {
    return (
        <div>
            <h1 className="title">Equipo de Héroes</h1>
            <HeroListContainer type={'dashboard'} value={null} teamHero={teamHero} setTeamHero={setTeamHero}/>
        </div>
    ) 
}

export default Home
