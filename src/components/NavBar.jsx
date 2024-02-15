function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const previous = () => setPokemonIndex(pokemonIndex - 1);
  const next = () => setPokemonIndex(pokemonIndex + 1);

  return (
    <nav>
      {pokemonIndex > 0 && (
        <button type="button" onClick={previous}>
          Previous
        </button>
      )}
      {pokemonIndex}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={next}>
          Next
        </button>
      )}
    </nav>
  );
}

export default NavBar;
