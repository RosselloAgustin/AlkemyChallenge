import React from 'react';
import { useParams } from 'react-router-dom';

import HeroDetailContainer from '../../Components/HeroDetailContainer/HeroDetailContainer';

import './DetailPage.css';
const DetailPage = ({ teamHero, setTeamHero }) => {

    let { id } = useParams();

    return (
        <section>

            <HeroDetailContainer id={id} teamHero={teamHero} setTeamHero={setTeamHero}/>
            
        </section>
    )
}

export default DetailPage
