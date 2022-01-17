import React, { useState } from 'react'

import HeroListContainer from '../../Components/HeroListContainer/HeroListContainer';

import './Search.css';

const Search = () => {

    const [value, setValue] = useState('');

    const getValue = (e) => { // e de evento

        console.log(e.target.value);
        setValue(e.target.value);

    }


    return (
        <main>
            <div className="search">

                <div className="search-container">

                    <div className="search-container__title">
                        <h2>Encuentra al Héroe que salvará al mundo</h2>
                    </div>

                    <div className="search-container__buscador">
                        <input
                            placeholder='Ingresa el nombre del héroe'
                            onChange={ getValue }
                            value={value}
                        />
                    </div>

                </div> 

            </div>

            

            <HeroListContainer type={'search'} value={value} urlAPI={ 'https://superheroapi.com/api/4383554221741704/search' }/>
            
        </main>
    )
}

export default Search
