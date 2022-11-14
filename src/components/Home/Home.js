import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

export const CountryContex = createContext();

const Home = () => {
  const anthom = "amar shonar bangla ami tomay valo bashi";
  const countries = useLoaderData();
  return (
    <CountryContex.Provider value={countries[20].name.common}>
      <div>
        <h1>Home</h1>
        <p>Countries: {countries.length}</p>
        <div className="row">
          {countries.map((country) => (
            <Country country={country}></Country>
          ))}
        </div>
      </div>
    </CountryContex.Provider>
  );
};

export default Home;
