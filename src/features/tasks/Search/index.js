import { Input } from "../Input/styled";
import { querySearchParameter } from "../querySearchParameter";
import { Wraper } from "./styled";
import { useQueryParameter } from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";


const Search = () => {
    const query = useQueryParameter(querySearchParameter)
    const replaceQueryParameter = useReplaceQueryParameter()

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: querySearchParameter,
            value: target.value.trim() !== "" ? target.value : undefined
        })
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