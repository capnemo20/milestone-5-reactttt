import "./Country.css";

const Country = ({country}) => {
    console.log(country);
    const {name, status, currencies, capital, languages, unMember, flags} = country
    return (
        <div className ="country">
            <h4>Name: {name?.common}</h4>
            <h4>Capital: {capital}</h4>
            <img className="flags" src={flags.png} alt="" />
            {/* <h4>Currency: {currencies}</h4> */}
            <h4>Status: {status}</h4>            
            <h4>UN Member: {unMember?"True":"False"}</h4>
            {/* <h4>Language: {languages}</h4> */}
            {/* <h4>Status: {country.status}</h4>
            <h4>Currency: {country.currencies}</h4>
            <h4>Capital: {country.capital}</h4>
            <h4>Language: {country.languages}</h4>
            <h4>UN Member: {country.unMember}</h4>
            <h4>cca2: {country.cca2}</h4> */}
        </div>
    );
};

export default Country;