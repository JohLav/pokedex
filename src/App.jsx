import PokemonCard from "./components/PokemonCard.jsx";

function App() {
    const pokemonList = [
        {
            name: "Bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        },
        {
            name: "Mew"
        }
    ];

    return (<div>
            <PokemonCard pokemonList={pokemonList}/>
        </div>);
}

export default App;
