import PropTypes from "prop-types";

function NavBar({ setPokemonIndex, pokemonList }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}

      {/*{pokemonIndex > 0 && (*/}
      {/*  <button type="button" onClick={previous}>*/}
      {/*    Previous*/}
      {/*  </button>*/}
      {/*)}*/}
      {/*{pokemonIndex}*/}
      {/*{pokemonIndex < pokemonList.length - 1 && (*/}
      {/*  <button type="button" onClick={next}>*/}
      {/*    Next*/}
      {/*  </button>*/}
      {/*)}*/}
    </nav>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }),
  ).isRequired,
};

export default NavBar;
