import axios from 'axios';
import React, { useEffect, useState } from 'react';

import HeroDetail from '../HeroDetail/HeroDetail';

import './HeroDetailContainer.css';

const HeroDetailContainer = ({ id, teamHero, setTeamHero }) => {

    const urlAPI = 'https://superheroapi.com/api/4383554221741704';
    
    const [hero, setHero] = useState(null);

    console.log(teamHero);
    
    useEffect(() => {
        
        axios.get(`${urlAPI}/${id}`).then(resp => { 

            const { data } = resp;
            setHero(data);

        });

    }, [])

    return (
        <section>
            
            {
                hero
                ? 
                  <div key={hero.id}>
                    <HeroDetail 
                            hero={hero}
                            teamHero={teamHero} 
                            setTeamHero={setTeamHero}
                    />
                  </div>      
                : <p>Cargando información...</p>
            }
        </section>     
    )
}

export default HeroDetailContainer
