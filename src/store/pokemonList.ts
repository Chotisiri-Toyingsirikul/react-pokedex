import { create } from 'zustand'
import { PokemonDetail } from '../services/pokemonDetail/pokemonDetail.type'

interface Store {
    pokemonList: PokemonDetail[]
    setPokemonList: (value: PokemonDetail[]) => void
    pokemonListDisplay: PokemonDetail[],
    setPokemonListDisplay: (value: PokemonDetail[]) => void
}

export const usePokemonListStore = create<Store>()((set) => ({

    pokemonList: [],
    setPokemonList: (value: PokemonDetail[]) => set(() => ({ pokemonList: value })),
    pokemonListDisplay: [],
    setPokemonListDisplay: (value: PokemonDetail[]) => set(() => ({ pokemonListDisplay: value }))


}))
