import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CountryContex } from "../Home/Home";

const Details = () => {
  const anthom = useContext(CountryContex);
  const country = useLoaderData();
  console.log(country);
  const { name, flags, area, population } = country[0];
  return (
    <div>
      <img src={flags.png} alt="" />
      <h2>{name.common}</h2>
      {area <= 500000 ? (
        <h4>
          <b>
            <i>Small Country</i>
          </b>
        </h4>
      ) : (
        <h3>
          <b>Big Country</b>
        </h3>
      )}
      <p>population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <b>
          <i>Anthom: {anthom}</i>
        </b>
      </p>
    </div>
  );
};

export default Details;
