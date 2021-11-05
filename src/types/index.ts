type ErrorType = null | string;

type QueryType = "/people" | "/starships";

type PeopleObjectType = {
  name: string,
  mass: string,
  birthYear: string
}

type StarshipObjectType = {
  name: string,
  crew: string,
  model: string
}

type StoreType = {
  people: PeopleObjectType[],
  starships: StarshipObjectType[]
}

type StoreKeyType = keyof StoreType;

export type {
  ErrorType,
  QueryType,
  PeopleObjectType,
  StoreType,
  StarshipObjectType,
  StoreKeyType
}

