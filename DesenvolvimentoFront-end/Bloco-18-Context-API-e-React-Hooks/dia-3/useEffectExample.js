import React, { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
}

useEffect(async () => {
  const { results } = await fetch(url).then((response) => response.json());
  setPokemons(results);

  return () => { console.log('aki simula o comportamente de Component WillUnmount') }

}, [limit]);

// useEffect(() => {}, []);
// useEffect(() => {}, []);
// useEffect(() => {}, []);
// useEffect(() => {}, []);

const nextPokemons = () => {
  setLimit(limit + 10);
};

return(
  <div>
    <h1>Pokemons</h1>
    <button type="button" onClick={nextPokemons}>Buscar mais Pokemons</button>
    <ul>
      {pokemons.map((item) => <li key={item.name}>{item.name}</li>)}
    </ul>
  </div>
);