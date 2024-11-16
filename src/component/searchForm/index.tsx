import React, { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { generationList, sortList, typesList } from '../../constant/pokemon'
import { usePokemonListStore } from '../../store/pokemonList'
import { pokemonList } from '../../services/pokemonList/pokemonList'
import { pokemonDetail } from '../../services/pokemonDetail/pokemonDetail'
import { PokemonDetail } from '../../services/pokemonDetail/pokemonDetail.type'
import { useStoreForKeepName151 } from '../../store/rearrange'

interface SearchFormType {
    category: string,
    sortBy: string,
    keyword: string,
    generation: string
}


const SearchForm = () => {
    const { pokemonList: pokemonListStore, setPokemonListDisplay, setPokemonList } = usePokemonListStore()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control
    } = useForm<SearchFormType>()
    const generation = watch("generation")


    const { setKeepName, keepName } = useStoreForKeepName151()


    const onSubmit = (value: SearchFormType) => {
        console.log(value);
        console.log(pokemonListStore);
        const newPokemonListStore = pokemonListStore.filter((items) => {


            return items.name.toLocaleLowerCase().includes(value.keyword.toLocaleLowerCase())

                &&

                (value.category === undefined || value.category === 'all types' || items.types.find((type) => {
                    return type.type.name === value.category
                }))
        })
        if (value.sortBy === 'id') {
            newPokemonListStore.sort((a, b) => a.id - b.id)
        }
        if (value.sortBy === 'name') {
            newPokemonListStore.sort((a, b) => a.name.localeCompare(b.name))
        }
        console.log("newPokemonListStore", newPokemonListStore);
        setPokemonListDisplay(newPokemonListStore)
    }


    const calldata = async (generation: string) => {
        // const generation = generationList[0]
        const generationSelection = generationList.find((item) => {
            return item.name === generation
        }) || generationList[0]
        setPokemonListDisplay([])//
        setPokemonList([])
        const response = await pokemonList.getpokemonList({ limit: generationSelection.limit, offset: generationSelection.offset })//ได้ list อาเรย์ที่เป็น name มา


        const getOnlyName = response.data.results.map((item) => {

            return item.name
        })
        setKeepName(getOnlyName)


        console.log('data is ', response.data.results);
        // const DatapokemonDetail = await pokemonDetail.getPokemonDetail({ name: 'dragonair' })
        // console.log('DatapokemonDetail is', DatapokemonDetail);

        const results: PokemonDetail[] = []
        for (const data in response.data.results) {
            // console.log('data for in is', response.data.results[data]);
            const DatapokemonDetail = await pokemonDetail.getPokemonDetail({ name: response.data.results[data].name })
            // console.log('data pokemondetail ', DatapokemonDetail);
            results.push(DatapokemonDetail.data)
        }
        setPokemonListDisplay(results)
        setPokemonList(results)


    }


    useEffect(() => {
        calldata(generation)
        console.log("generation");

    }, [generation])


    return (
        <div>SearchForm
            <form onSubmit={handleSubmit(onSubmit)} >
                <Controller
                    name="category"
                    control={control}

                    render={({ field }) => <select onChange={field.onChange} value={field.value} name={field.name} className='border px-4 py-2'>
                        {typesList.map((item) => {
                            return <option value={item}>{item}</option>
                        })}

                    </select>}
                />

                <Controller
                    name="generation"
                    control={control}

                    render={({ field }) => <select onChange={field.onChange} value={field.value} name={field.name} className='border px-4 py-2'>
                        {generationList.map((generation) => {
                            return <option value={generation.name}>{generation.name}</option>
                        })}

                    </select>}
                />


                <Controller
                    name="sortBy"
                    control={control}

                    render={({ field }) => <select onChange={field.onChange} value={field.value} name={field.name} className='border px-4 py-2'>
                        {sortList.map((item) => {
                            return <option value={item}>{item}</option>
                        })}

                    </select>}
                />




                <input type="text" className='border px-4 py-2' {...register('keyword')} />
                <button type='submit' className='border px-4 py-2'>submit</button>
            </form>

        </div>
    )
}

export default SearchForm