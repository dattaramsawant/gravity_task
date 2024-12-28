import { API_ENDPOINT } from "@/utils/constants"
import { notFound } from "next/navigation"

export async function getTypes() {
    try {
        const url=process.env.NEXT_PUBLIC_API_URL+API_ENDPOINT.TYPE
        const response = await fetch(url,{next: { revalidate: 3600 }})
        const data = await response.json()
        return data.results
    } catch (error) {
        console.log(error)
    }
}

export async function getPokemonByType(type) {
    try {
        const url=process.env.NEXT_PUBLIC_API_URL+API_ENDPOINT.TYPE+"/"+type
        const response = await fetch(url)
        const data = await response.json()
        return data.pokemon
    } catch (error) {
        console.log(error)
        return[]
    }
}

export async function getAllPokemon() {
    try {
        const url=process.env.NEXT_PUBLIC_API_URL+API_ENDPOINT.POKEMON
        const response = await fetch(url, {cache: "no-cache", revalidate: 3600})
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function getPokemonById(id) {
    try {
        const url=process.env.NEXT_PUBLIC_API_URL+API_ENDPOINT.POKEMON+"/"+id
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        notFound()
        console.log(error)
    }
}