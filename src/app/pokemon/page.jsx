'use client';

import List from "@/components/List";
import SearchForm from "@/components/SearchForm";
import usePokemon from "@/hooks/usePokemon";

export default function Pokemon() {
  const { pokemonList, loading, error, setSearch, type, setType } = usePokemon();

  return (
    <div className="container mx-auto px-4 py-4 grid gap-16">
      <SearchForm 
        onSearch={(data)=>setSearch(data?.trim())} 
        selectedValue={type}
        setSelectedValue={setType}
      />
      
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}

      <List pokemonList={pokemonList} />
    </div>
  );
}
