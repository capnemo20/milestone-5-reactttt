import { useState } from "react";
import "./Country.css";

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);
    const [visitedCountries, setVisitedCountriesCountries] = useState([]);
    const handleVisited = ()=>{
        setVisited(!visited);
    }
    const {name,cca3, status, population, capital, languages, unMember, flags, area, } = country;
    console.log(handleVisitedCountries);
    return (
        // {className = {`country ${visited ? "visited":"non-visited"}`}}
        <div  className={`country ${visited && "visited"}`}>
            <h4 style = {{color: visited? "purple":"blue"}}>Name: {name?.common}</h4>
            <h5>Capital: {capital}</h5>
            <img className="flags" src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
            <h5><small>Code: {cca3}</small></h5>
            <button >Mark Visited</button>
            <br />
            <button onClick={handleVisited} className="country-btn">Visited</button>
           {/* {visited && "I have visited this country"} */}
           {visited? "Visited":"I want to visit this country"}
        </div>
    );
};

export default Country;