import React, { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState({});

    const fetchData = () => {

        fetch(pokemon.url)
            .then((response) => {

                return response.json();
            })
            .then((data) => {
                setPokemonData(data);
            });
    };




    useEffect(() => {

        fetchData();

    }, []);

    return (
        <p>{pokemonData && (<img src={pokemonData?.sprites?.front_default} />)}</p>
    );
};

export default Pokemon;



