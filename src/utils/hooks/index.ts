import { useState, useEffect } from "react";
import { ErrorType, PeopleObjectType, QueryType, StarshipObjectType } from "../../types";
import { errorMessageParser, getAllItems } from "../index";

type useQueryType<ResultType> = {
  isLoading: boolean,
  error: ErrorType,
  data: ResultType[],
}

const useQuery = <ResultType extends {}, QueryType = {}>(query: QueryType): useQueryType<ResultType> => {
  const [isLoading, setIsLoading] = useState(() => true);
  const [error, setError] = useState<ErrorType>(() => null);
  const [data, setData] = useState<ResultType[]>(() => ([]) as ResultType[]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getAllItems<ResultType>(`${process.env?.REACT_APP_ENDPOINT!}${query}`);
        setData(data);
      } catch(error) {
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
  const {
    isLoading: isLoadingPeople,
    error: peopleError
  } = useQuery<PeopleObjectType>("/people");
  const {
    isLoading: isLoadingStarships,
    error: starshipsError
  } = useQuery<StarshipObjectType, QueryType>("/starships");

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