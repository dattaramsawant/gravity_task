import { getPokemonByType, getTypes } from "@/services/pokemon";
import { useEffect, useState } from "react";
import Select from "./Select";
import Search from "./Search";

const SearchForm = (props) => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        async function getTypesAPI() {
            const res = await getTypes()
            setTypes(res)
        }

        getTypesAPI()
    }, [])

    return (
        <div className="grid grid-cols-1 gap-4">
            <Select
                options={types}
                onChange={(e)=>props.setSelectedValue(e?.target?.value)}
                value={props?.selectedValue}
            />
            <Search
                onSearch={(data)=>props?.onSearch(data)}
            />
        </div>
    );
};

export default SearchForm;
