import { useState, useEffect, useCallback, useMemo } from 'react';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = ({ handlePokemonClick }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [pokemons, setPokemons] = useState([]);

    const getAllPokemons = useCallback(() => {
        return fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
            .then((res) => res.json())
            .then((res) => res.results)
    })

    useEffect(() => {
        getAllPokemons()
            .then((data) => setPokemons(data));
    }, [])

    const filteredPokemons = useMemo(() => {
        return pokemons.filter((o) => o.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, pokemons]);

    const handleOnChangeSearchQuery = (event) => {
        setSearchQuery(event.target.value)
    }   

    return (
        <div className="PokemonList">
            <div className="SearchBox">
                <label>
                    Search
                    <input type='text' value={searchQuery} onChange={handleOnChangeSearchQuery} />
                </label>
            </div>

            <ul>
                {
                    filteredPokemons.map((pokemon, id) => (
                        <li className="display: flex place-content-between" key={id + 1} onClick={() => handlePokemonClick(pokemon.name) }>
                            <Pokemon pokemon={pokemon} />
                            <p>{pokemon.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PokemonList;