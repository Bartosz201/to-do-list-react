import { useHistory, useLocation } from "react-router-dom";
import { Input } from "../Input/styled";
import { Wraper } from "./styled";


const Search = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");
    const history = useHistory();

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search)

        if (target.value.trim() === "") {
            searchParams.delete("szukaj")
        } else {
            searchParams.set("szukaj", target.value)
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    }


    return (
        <Wraper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            >
            </Input>
        </Wraper>
    )
};

export default Search;