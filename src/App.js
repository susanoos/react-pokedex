import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const getPokemonData = (data) => {
    setPokemonData(data);
    setIsLoaded(true);
  };

  return (
    <div className="app">
      <h1 className="header">Pokedex</h1>
      <Search getPokemonData={getPokemonData} />
      {!isLoaded && ""}
      {isLoaded && <Pokemon pokemonData={pokemonData} />}
    </div>
  );
}

export default App;
