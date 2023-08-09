import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch the initial data from the API
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/pokemon");
    if (response.ok) {
      const data = await response.json();
      setPokemonData(data);
    }
  };

  const addPokemon = async () => {
    // Fetch the updated data after adding a new Pokemon
    await fetchData();
  };

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemonList={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;