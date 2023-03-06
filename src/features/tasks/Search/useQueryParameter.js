import { useLocation } from "react-router-dom"

export const useQueryParameter = (queryParamaName) => {
    const location = useLocation()
    return (new URLSearchParams(location.search)).get(queryParamaName);
}   