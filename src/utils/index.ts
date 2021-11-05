import axios from "axios";

const getAllItems = <ResultType> (endpoint: string) => {
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

export {
  getAllItems,
  errorMessageParser,
  queryParser,
  messageParser
}