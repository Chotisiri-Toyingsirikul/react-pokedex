import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { pokemonList } from '../services/pokemonList/pokemonList'
import { generationList } from '../constant/pokemon'
import { pokemonDetail } from '../services/pokemonDetail/pokemonDetail'
import { PokemonDetail } from '../services/pokemonDetail/pokemonDetail.type'
import SearchForm from '../component/searchForm'
import { usePokemonListStore } from '../store/pokemonList'
// type Props =

//     {}


const Homepage = () => {
    const { pokemonListDisplay, setPokemonList, setPokemonListDisplay } = usePokemonListStore()
    // const [pokemonDisplay, setPokemonDisplay] = useState<PokemonDetail[]>([])





    return (
        <div>Homepage
            <Link to="detail">link to detail </Link>
            <SearchForm />

            <div className='grid grid-cols-5 gap-4'>
                {pokemonListDisplay.map((pokemon) => {
                    return <Link to={`/detail/${pokemon.name}`} className='border '>
                        <img src={pokemon.sprites.other['official-artwork'].front_default} className='w-full' alt="" />
                        <div>{pokemon.name}</div>
                    </Link>
                })}
            </div>



        </div>
    )
}

export default Homepage