import { getPokemonById } from "@/services/pokemon"
import { headers } from "next/headers"
import Link from "next/link"

export default async function pokemonDetails(props) {
    const referer = await headers().get('referer')
    const id = await props?.params?.id
    const detail = await getPokemonById(id)

    return (
        <div className="container mx-auto px-4 py-4">
            <Link className="text-gray-500" href={referer ? referer.includes(`pokemon/${id}`) ? '/pokemon' : referer : '/pokemon'}>Back</Link>
            <div className="grid justify-center gap-4">
                <div className="bg-white w-96 md:w-80 sm:w-64 rounded-md shadow-md grid">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                        alt={detail?.name}
                        className='justify-self-center bg-teal-500 w-full'
                    />
                    <div className="bg-yellow-400 grid gap-2 p-4">
                        <p className='text-slate-950'>
                            <span className="font-bold">Name: </span><span>{detail?.name}</span>
                        </p>
                        <p className='text-slate-950'>
                            <span className="font-bold">Type: </span><span>{detail?.types?.map(data=> data?.type?.name)?.join(", ")}</span>
                        </p>
                        <p className='text-slate-950'>
                            <span className="font-bold">Stats: </span><span>{detail?.stats?.map(data=> data?.stat?.name)?.join(", ")}</span>
                        </p>
                        <p className='text-slate-950'>
                            <span className="font-bold">Abilities: </span><span>{detail?.abilities?.map(data=> data?.ability?.name).join(', ')}</span>
                        </p>
                        <p className='text-slate-950'>
                            <span className="font-bold">Some Moves: </span><span>{detail?.moves?.slice(0,5)?.map(data=> data?.move?.name)?.join(", ")}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}