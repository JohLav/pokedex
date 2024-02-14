

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

export default PokemonCard;