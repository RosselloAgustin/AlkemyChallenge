import React, { useState } from 'react'

import PowerStats from '../PowerStats/PowerStats'



const PowerStatsContainer = () => {

    // const url = '';

    // const [heroes, setHeroes] = useState([]);

    // useEffect(() => {
    //    axios.get(url).then(resp => {
    //        setHeroes(resp.data);
    //    });

    // }, []);


    return (
        <div className="powerstats-list-container">
            <div className="powerstats-team-container">
                <PowerStats/>
            </div>
        </div>
    )
}

export default PowerStatsContainer
