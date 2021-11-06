import axios from "axios";
import {WinnerType} from "../types";

const getAllItems = <ResultType>(endpoint: string) => {
    let newData: ResultType[] = [];
    return axios(endpoint)
        .then(res => {
            newData = res.data.results;
            return res.data.count
        })
        .then(count => {
            const pagesCount = Math.ceil((count - 1) / 10);
            let promisesArray = [];
            for (let i = 2; i <= pagesCount; i++) {
                promisesArray.push(axios(`${endpoint}?page=${i}`));
            }
            return Promise.all(promisesArray);
        })
        .then(allData => {
            newData = allData.reduce((prev, actual) => [...prev, ...actual.data.results], newData);
            return newData;
        })
}

const errorMessageParser = <QueryType>(message: string, query: QueryType) => {
    const firstPart = messageParser(message);
    const secondPart = queryParser(query);
    return firstPart + " " + secondPart;
}

const queryParser = <QueryType>(query: QueryType) => {
    const queryString = String(query);
    return queryString.replace("/", "").toUpperCase()
}

const messageParser = (message: string) => {
    return message.replaceAll("Error: ", "");
}

const selectWinner = (firstValue: string, secondValue: string): WinnerType => {
    const firstIndex = Number(firstValue);
    const secondIndex = Number(secondValue);

    if(!isNaN(firstIndex) && !isNaN(secondIndex)) {
        return firstIndex > secondIndex ? "first_player" : firstIndex === secondIndex ? "draw" : "second_player"
    }

    if(isNaN(firstIndex) && isNaN(secondIndex)) {
        return "draw"
    }

    return isNaN(firstIndex) ? "second_player" :  "first_player";
}

const getRandomNumber = (gameStoreLength: number) => {
    return Math.floor(Math.random() * gameStoreLength)
}

export {
    getAllItems,
    errorMessageParser,
    queryParser,
    messageParser,
    selectWinner,
    getRandomNumber
}