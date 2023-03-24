import "./App.css";
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";

function App() {
  const pokemonData = (data) => {
    console.log(data);
    return data;
  };

  return (
    <div className="app">
      <h1 className="header">Pokedex</h1>
      <Search getPokemonData={pokemonData} />
      <Pokemon pokemonData={pokemonData} />
    </div>
  );
}

export default App;
