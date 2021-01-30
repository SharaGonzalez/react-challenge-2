import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  const {
    name,
    sprites: { front_default, front_shiny },
    video
  } = mockPokemonData;

  return (
    <>
      <h1>{name}</h1>
      <img src={front_default} alt="Front default"></img>
      <img src={front_shiny} alt="Front shiny"></img>
      <br />
      <a href={video}>Click here to go to the video</a>
    </>
  );
};

export default PokeCard;
