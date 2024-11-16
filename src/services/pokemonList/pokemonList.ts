//เป็นแค่ฟังก์ชั่น แค่ ts  | ใช้กับ type || ใช้ตัวแปลคอนดิชั่น หรือเหมือนกัน
import axios from "axios"
import { PokemonList } from "./pokemonList.type"

export const pokemonList = {

    getpokemonList: ({ offset, limit }: { offset: number, limit: number }) => {
        const response = axios.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        return response
    }
}
