//เป็นแค่ฟังก์ชั่น แค่ ts  | ใช้กับ type || ใช้ตัวแปลคอนดิชั่น หรือเหมือนกัน
import axios from "axios"
import { PokemonDetail } from "./pokemonDetail.type"

export const pokemonDetail = {
    // { name }: { name: string }
    //{ name, age, home }: { name: string, age: number, home: boolean }
    getPokemonDetail: ({ name }: { name: string }) => {
        const response = axios.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return response
    }
}



