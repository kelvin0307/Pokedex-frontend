import { useState } from 'react'
import './App.css'
import FetchPokemon from './components/FetchPokemon/FetchPokemon'
import PokemonList from './components/PokemonList/PokemonList'

const App = () => {
	const [pokemonName, setPokemonName] = useState("");

	const handleChangePokemonName = (name) => {
		console.log(name)
		setPokemonName(name);
	}

	return (
		<div className='App'>
			<div className="w-80 h-screen">
				<PokemonList handlePokemonClick={handleChangePokemonName} />
			</div>
			<FetchPokemon pokemonName={pokemonName} />
    </div>
	)
}

export default App
