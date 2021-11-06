import {useState, useEffect} from "react";
import {ErrorType, PeopleObjectType, QueryType, StarshipObjectType, StoreKeyType} from "../../types";
import {errorMessageParser, getAllItems} from "../index";
import {useDispatch, useStore} from "../../Context";
import {setSWDataAction} from "../../Context/actions";

type useQueryType<ResultType> = {
    isLoading: boolean,
    error: ErrorType,
    data: ResultType[] | null,
}

const useQuery = <ResultType extends {}, QueryType = {}>(query: QueryType, cacheKey?: StoreKeyType): useQueryType<ResultType> => {
    const store = useStore();
    const [isLoading, setIsLoading] = useState(() => true);
    const [error, setError] = useState<ErrorType>(() => null);
    const [data, setData] = useState<ResultType[] | null>(() => null);
    useEffect(() => {
        if (cacheKey && store[cacheKey].length !== 0) {
            return setIsLoading(false)
        }
        (async () => {
            setIsLoading(true);
            try {
                const data = await getAllItems<ResultType>(`${process.env?.REACT_APP_ENDPOINT!}${query}`);
                setData(data);
            } catch (error) {
                const errorMessage = errorMessageParser<QueryType>(String(error), query)
                setError(errorMessage)
            } finally {
                setIsLoading(false)
            }
        })()
    }, [query])

    return {
        isLoading,
        error,
        data
    }
}

const useGlobalFetch = () => {
    const dispatch = useDispatch()
    const {
        data: peopleData,
        isLoading: isLoadingPeople,
        error: peopleError
    } = useQuery<PeopleObjectType>("/people", "people");
    const {
        data: starshipsData,
        isLoading: isLoadingStarships,
        error: starshipsError
    } = useQuery<StarshipObjectType, QueryType>("/starships", "starships");

    useEffect(() => {
        if(peopleData) {
            dispatch(setSWDataAction("people", peopleData))
        }
    }, [peopleData])

    useEffect(() => {
        if(starshipsData) {
            dispatch(setSWDataAction("starships", starshipsData))
        }
    }, [starshipsData])

    return {
        isLoading: isLoadingPeople || isLoadingStarships,
        peopleError,
        starshipsError
    }
}

export {
    useQuery,
    useGlobalFetch,
}