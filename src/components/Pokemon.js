import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemonData }) => {
  const data = pokemonData;
  console.log(data);
  return (
    <div className={styles.pokemon__card}>
      <ul>
        <h1>Pokemon</h1>
        <span>img</span>
        <span>Type</span>
        <span>Details</span>
      </ul>
    </div>
  );
};

export default Pokemon;
