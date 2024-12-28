import { getAllPokemon, getPokemonByType } from "@/services/pokemon";
import { useState, useEffect } from "react";

const usePokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [search,setSearch]=useState('')
    const [type,setType]=useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formattedPokemons = (data) => {
        return data?.map(pokemon=>{
            const id = type ? pokemon?.pokemon?.url?.split('pokemon/')[1]?.slice(0, -1) : pokemon?.url?.split('pokemon/')[1]?.slice(0, -1);
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return{
                id,
                img,
                name: type ? pokemon?.pokemon?.name : pokemon?.name
            }
        })
    }

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            setError(null);
            let data=[]
            if (type) {
                const res = await getPokemonByType(type)
                data = await formattedPokemons(res?.slice(0, 20))
            } else {
                const res = await getAllPokemon()
                data = await formattedPokemons(res?.results)
            }

            if(search){
                data = data?.filter(pokemon=>pokemon?.name?.toLowerCase()?.includes(search?.toLowerCase()))
            }
                
            setPokemonList(data);
            setLoading(false)
        };

        fetchPokemons();
    }, [search, type]);

    return { pokemonList, loading, error, search, setSearch, type, setType };
};

export default usePokemon;
