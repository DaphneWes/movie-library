import { useState } from "react";
import { MOVIE_API_URL, movieAPIOptions } from "../../api";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            if (inputValue.length === 0) {
                inputValue = "A";
            }
            const response = await fetch(`${MOVIE_API_URL}title/v2/find?title=${inputValue}&limit=5`, movieAPIOptions);
            console.log(response);
            const response_1 = await response.json();
            return {
                options: response_1.results.map((movie) => {
                    return {
                        value: `${movie.id}`,
                        label: `${movie.title} (${movie.year})`,
                    };
                })
            };
        } catch (err) {
            return console.log(err);
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for a Movie"
            debounceTimeout={500}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;