import React, { useEffect, useState } from 'react';
import Country from '../Countries/Country';

const Comphonent = () => {
   const [country,setCountry] = useState([]);
   const [visitedCountries, setvisitedCountries] = useState([]);

   const [visitedFlag,setVisitedFlag] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data) )
    },[])


    const handleVisitedCountry =(country) =>{
        console.log('add this country to your visited country')
        // console.log(country);
        const newVisitedCountry = [...visitedCountries,country];
        setvisitedCountries(newVisitedCountry);
    }
    ////    arrow function  for the display flag   ///
    const handleVisitedFlag = (Flag) =>{
        // console.log('add the flag')
        // console.log(Flag)
        const newVisitedFlag = [...visitedFlag, Flag];
        setVisitedFlag(newVisitedFlag);
    }
    return (
        <div>
            <h1>Countries:{country.length}</h1>
            <div>
                <h2>Visited countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className='flag-container'>
                {
                    visitedFlag.map((flag,idx) => <img key={idx} src={flag}></img>)
                }
            </div>
        <div className='country-container'>
           {
                country.map(oli => <Country 
                    key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlag={handleVisitedFlag}
                     country={oli}>   
                     </Country>)
            }
        </div>
       
        </div>
    );
};

export default Comphonent;