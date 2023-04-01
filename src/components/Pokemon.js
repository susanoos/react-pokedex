import React from "react";
import styles from "./Pokemon.module.css";
import axios from "axios";
/*
TODO: this link retrieves the details of the pokemon from the API, need to implement by id
// https://pokeapi.co/api/v2/pokemon-species/${id}
*/
const Pokemon = ({ pokemonData }) => {
  console.log(pokemonData);

  const {
    abilities: [
      {
        ability: { name: abilityName },
      },
    ],
    name,
    id,
    sprites: { front_default },
    types: [type],
  } = pokemonData;

  console.log(abilityName);

  const {
    type: { name: typeName },
  } = type;

  return (
    <div className={styles.pokemon__card}>
      <ul>
        <li>
          <h1>{name}</h1> <span>#{id}</span>
          <hr />
        </li>
        <li>
          <img src={front_default} alt={name} />
        </li>
        <li>
          <p>
            Type: <span className={styles.type}>{typeName}</span>
          </p>
        </li>
        <li>
          <p>
            Abilities: <span>{abilityName}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Pokemon;
