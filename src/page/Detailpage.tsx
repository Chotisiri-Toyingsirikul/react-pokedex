import React, { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { pokemonDetail } from '../services/pokemonDetail/pokemonDetail'
import { PokemonDetail } from '../services/pokemonDetail/pokemonDetail.type'
import { useStoreForKeepName151 } from '../store/rearrange'
// type Props = {}

const Detailpage = () => {
    const { name } = useParams();
    const [pokemonDisplay, setPokemonDisplay] = useState<PokemonDetail | undefined>(undefined)
    const { keepName, setKeepName } = useStoreForKeepName151()
    const calldata = async (name: string) => {


        // console.log('data for in is', response.data.results[data]);
        const DatapokemonDetail = await pokemonDetail.getPokemonDetail({ name: name })
        // console.log('data pokemondetail ', DatapokemonDetail);


        setPokemonDisplay(DatapokemonDetail.data)
        console.log("keepName", keepName);
    }


    useEffect(() => {

        if (name) {
            calldata(name)
        }
    }, [name])

    let nameofit;
    if (keepName[keepName.indexOf(name ? name : "") - 1] === undefined) {
        nameofit = keepName[150]
    } else {
        nameofit = keepName[keepName.indexOf(name ? name : "") - 1]
    }




    return (
        <div>Detailpage


            <Link to={`/detail/${nameofit}`}>
                {"<"}
            </Link>

            {/* <Link to={`/ detail / ${keepName[keepName.indexOf(name ? name : "") - 1] === undefined ? keepName[150] : keepName[keepName.indexOf(name ? name : "") - 1]}`}  >
                {">"}
            </Link> */}

            <Link to={`/detail/${keepName[keepName.indexOf(name ? name : "") + 1]}`}  >
                {">"}
            </Link>

            {pokemonDisplay?.name}
            <img src={pokemonDisplay?.sprites.other['official-artwork'].front_default} alt="" />
        </div >

    )
}

export default Detailpage