import PropTypes from "prop-types";

function PokemonCard({pokemonList}) {
    const pokemon = pokemonList[0];

    return (
        <figure>
            {
                (pokemon.imgSrc !== undefined)
                    ? <img src={pokemon.imgSrc} alt=""/>
                    : "???"
            }
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })
}

export default PokemonCard;

