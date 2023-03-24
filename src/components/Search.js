import React, { useState } from "react";
import styles from "./Search.module.css";
import axios from "axios";

const Search = ({ getPokemonData }) => {
  const [searchedPokemon, setSearchedPokemon] = useState("");

  const getPokemon = async (pokemon) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      getPokemonData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getPokemon(searchedPokemon);
    setSearchedPokemon("");
  };

  const changeHandler = (e) => {
    setSearchedPokemon(e.target.value);
  };

  return (
    <form className={styles.search__container} onSubmit={submitHandler}>
      <label className={styles.search__header}>Search Pokemon</label>
      <div>
        <input
          type="text"
          placeholder="Enter Pokemon"
          className={styles.search__input}
          value={searchedPokemon}
          onChange={changeHandler}
        />{" "}
        <button type="submit" className={styles.search__btn}>
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
