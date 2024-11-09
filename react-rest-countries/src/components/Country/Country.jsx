import { useState } from "react";
import "./Country.css";

const Country = ({country}) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = ()=>{
        setVisited(!visited);
    }
    const {name,cca3, status, population, capital, languages, unMember, flags, area} = country
    return (
        <div className ="country">
            <h4>Name: {name?.common}</h4>
            <h5>Capital: {capital}</h5>
            <img className="flags" src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
            <h5>Code: {cca3}</h5>
            <button onClick={handleVisited} className="country-btn">Visited</button>
           {/* {visited && "I have visited this country"} */}
           {visited? "Visited":"I want to visit this country"}
        </div>
    );
};

export default Country;