import React, { useState, useEffect } from "react";

// create Context
const url = "https://rickandmortyapi.com/api/character";
const RickMortyContext = React.createContext();

// create Provider
const RickMortyProvider = (props) => {
  // Initialize data = []
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  // Initialize loading = true
  const [isLoading, setIsLoading] = useState(true);

  // Call API for Promise and setData
  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchData = async (url) => {
    let query = `${url}`;
    const res = await fetch(query);
    res
      .json()
      .then((res) => {
        setData(res.results);
        setInfo(res.info);
      })
      .catch((err) => setIsLoading(true));
  };

  const fetchPage = (page) => {
    let query = `${url}/?page=${page}`;
    console.log(query);
    fetchData(query);
  };

  return (
    <RickMortyContext.Provider
      value={{
        info,
        data,
        fetchPage,
        isLoading,
      }}
    >
      {props.children}
    </RickMortyContext.Provider>
  );
};

// export Provider, Context
export { RickMortyProvider, RickMortyContext };
