type ErrorType = null | string;

type QueryType = "/people" | "/starships";

type PeopleObjectType = {
    name: string,
    mass: string,
    birth_year: string
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

type WinnerType = "first_player" | "second_player" | "draw";

export type {
    ErrorType,
    QueryType,
    PeopleObjectType,
    StoreType,
    StarshipObjectType,
    StoreKeyType,
    WinnerType
}

