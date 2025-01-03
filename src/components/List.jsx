import { Fragment } from "react";
import SingleCard from "./SingleCard";

const List = (props) => {
  if (props?.pokemonList?.length === 0) {
    return <div className="text-black">No Pokémon found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props?.pokemonList?.map((pokemon) => (
        <Fragment key={pokemon.name} >
          <SingleCard data={pokemon} />
        </Fragment>
      ))}
    </div>
  );
};

export default List;
