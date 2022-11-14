import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  //   const countryData = useContext(CountryContex);
  console.log(country, country.cca3);
  const { name, flags, population } = country;
  return (
    <div className="col-4 p-4 border border-3 bg-info rounded">
      <img src={flags.png} alt="" />
      <h2>{name.common}</h2>
      <p>Population: {population}</p>
      <Link to={`/country/${name.common}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Country;
