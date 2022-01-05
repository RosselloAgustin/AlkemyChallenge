import React from 'react';
import HeroCard from '../HeroCard/HeroCard';

import './HeroListContainer.css';

const HeroListContainer = () => {

    

    return (
        <div className='hero-list-container'>
            
            <div className='hero-grid-container'>

                <HeroCard />

                <HeroCard />

                <HeroCard />

                <HeroCard />

                <HeroCard />

                <HeroCard />

            </div>

            


        </div>
    )
}

export default HeroListContainer
