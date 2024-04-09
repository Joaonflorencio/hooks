import React from 'react';
import useFetchData from './hooks/useFetchData';

function App() {
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchData('https://pokeapi.co/api/v2/pokemon/1');
  const { data: rickAndMortyCharacter, loading: loadingRickAndMorty, error: errorRickAndMorty } = useFetchData('https://rickandmortyapi.com/api/character/1');

  if (loadingPokemon || loadingRickAndMorty) return <p>Cargando...</p>;
  if (errorPokemon || errorRickAndMorty) return <p>Error al cargar los datos.</p>;

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h2>Personaje Rick and Morty</h2>
      <p>{rickAndMortyCharacter.name}</p>
      <img src={rickAndMortyCharacter.image} alt={rickAndMortyCharacter.name} />
    </div>
  );
}

export default App;