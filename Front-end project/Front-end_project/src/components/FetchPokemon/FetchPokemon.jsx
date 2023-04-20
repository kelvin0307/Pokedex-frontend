import { useState, useEffect, useCallback } from 'react'
import './FetchPokemon.css'

const FetchPokemon = ({ pokemonName }) => {
    const [ pokemon, setPokemon] = useState();

    const getPokemon = useCallback(() => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
    })

    useEffect(() => {
        if (pokemonName) {
            getPokemon()
                .then((data) => setPokemon(data))
        }
    }, [pokemonName])

    return(
        <div className='Loading'>
            {
                pokemon ? (
                    <>
                        <div className="BackgroundFetch">
                            <div className="PlatformAndPokemon">
                                <img className='Pokemon' src={pokemon.sprites?.front_default} alt="" />
                            </div>
                        </div>
                        <div className="flex w-full justify-end items-center">
                            <div className="StatBox">
                                <p>Name: {pokemon.name}</p>
                                <p>Height: {pokemon.height}</p>
                                <p>Weight: {pokemon.weight}</p>
                                <p>Types: </p>
                                {pokemon.types?.map( (types, index) => (
                                <p key={index}>{types.type.name}</p>
                            ))}
                            <a href={`/Stats/1`}> check</a>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Loading..</div>
                )
            }
        </div>
    )
}

export default FetchPokemon