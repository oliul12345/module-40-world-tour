import React, { useState } from 'react';
import './Countrie.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    // console.log(country)
    const{name,flags,capital,population,cioc} = country;

    const [Visited,setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!Visited)
    }

    // console.log(handleVisitedCountry)

    return (
        <div className={`box  ${Visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: Visited ? 'yellow' : 'black'}}>Country:{name.common}</h3>
            <h4>Capital:{capital}</h4>
            <img src={flags.png} alt="" />
            <p>{flags.alt}</p>
            <p>{population}</p>
            <p>Code: {cioc}</p>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'} : </button>
            {Visited ? 'I have Visited this country' : 'I want to Visit'}
            <br />
          <button onClick={() => handleVisitedCountry(country)} >Mark Visited</button>
          <br />
          <button onClick={() => handleVisitedFlag(country)}>Add Flag</button>
        </div>
    );
};

export default Country;