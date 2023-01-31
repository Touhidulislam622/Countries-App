import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";



const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <h1>Country App </h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h3>{error.message}</h3>}
      {countries && <Countries countries = {countries} />}
    </>
  );
}

export default App;
