import React, { useState } from "react";
import axios from "axios";

import PokemonComponent from './components/Pokemon/Pokemon';
import InputComponent from './components/Input/Input';
import './global.module.css';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const handleNextPokemon = () => {
    // Get the ID of the next pokemon
    const nextPokemonId = currentPokemon.id + 1;

    // Fetch the next pokemon data
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePreviousPokemon = () => {
    // Get the ID of the previous pokemon
    const previousPokemonId = currentPokemon.id - 1;

    // Fetch the previous pokemon data
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${previousPokemonId}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchSubmit = (inputValue) => {
    // Fetch the pokemon data based on the input value
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <InputComponent onSubmit={handleSearchSubmit} />
      <PokemonComponent pokemon={currentPokemon} />
      <button onClick={handlePreviousPokemon}>Previous</button>
      <button onClick={handleNextPokemon}>Next</button>
    </div>
  );
};

export default App;
