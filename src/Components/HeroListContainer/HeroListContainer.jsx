import axios from 'axios';
import React, { useEffect, useState } from 'react';

import HeroCard from '../HeroCard/HeroCard';
import Button from '../Presentational/Button';

import './HeroListContainer.css';

const HeroListContainer = ({ type, value, urlAPI, teamHero, setTeamHero}) => {

    const [heros, setHeros] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    console.log('lo que hay en el teamHero', teamHero);
    

    // const addHero = ( hero ) => {

    //     if(!teamHero){
    //         setTeamHero([hero]);
    //     }else{
    //         setTeamHero([...teamHero, hero])
    //     }
    //     console.log(hero);
    // }
    
    useEffect(() => {   

        if(type ==="search" && value.length > 1){
           
            axios.get(`${urlAPI}/${value}`).then(resp => {
                const { data } = resp;
                const { error } = data;
                setHeros(data.results);

                if(error){
                    setErrorMessage(error)
                }else{
                    setErrorMessage('');
                }
            });
    
        }else {
            setHeros([]);
        }

    }, [value])

    if(type==='search'){
        return (
            <div className='hero-list-container'>
                 
                { (errorMessage && value.length) && <div className='alert'>No se encontraron héroes con la palabra "{value}"</div>} 
    
                <div className='hero-grid-container'>
    
                    {
                     
                        heros ?
    
                        (<>
                        {
                            heros.map(hero => {
    
                                return (
                                    <div key={hero.id}>
                                        <HeroCard 
                                            name={hero.name}
                                            intelligence={hero.powerstats.intelligence}
                                            strength={hero.powerstats.strength}
                                            speed={hero.powerstats.speed}
                                            durability={hero.powerstats.durability}
                                            power={hero.powerstats.power}
                                            combat={hero.powerstats.combat}
                                            image={hero.image.url}
                                            id={hero.id}
                                        />
                                        {/* <div onClick={ () => { addHero(hero) } }>
                                            <Button title = "Agregar" type = "primary" />
                                        </div> */}
                                    </div>
                                )
                            })
                        }
                        
                        </>)
    
                        : null
                    }
         
                    
    
                </div>
    
                 
    
    
            </div>
        )
    }else if(type==='dashboard'){

        return (
            <div className='hero-list-container'>
    
                { (!teamHero) && <div className='alert'> No has elegido ningún heroe </div> }
    
                <div className='hero-grid-container'>
    
                    {
                     
                        teamHero ?
    
                        (<>
                        {
                            teamHero.map(hero => {
    
                                return (
                                    <div key={hero.id}>
                                        <HeroCard 
                                            name={hero.name}
                                            intelligence={hero.powerstats.intelligence}
                                            strength={hero.powerstats.strength}
                                            speed={hero.powerstats.speed}
                                            durability={hero.powerstats.durability}
                                            power={hero.powerstats.power}
                                            combat={hero.powerstats.combat}
                                            image={hero.image.url}
                                            id={hero.id}
                                        />
                                        <div className="button-agregar">
                                            <button className="agregar">Eliminar</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        </>)
    
                        : null
                    }
         
                    
    
                </div>
    
                 
    
    
            </div>
        )
    }
}

export default HeroListContainer
