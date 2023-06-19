import React, { useState } from "react";

const PokemonComponent = ({ pokemon }) => {
    if (!pokemon) {
      return <div>No pokemon to display.</div>;
    }
  
    const { name, sprites } = pokemon;
  
    return (
      <div>
        <h2>{name}</h2>
        <img src={sprites.front_default} alt={name} />
      </div>
    );
  };

  export default PokemonComponent;