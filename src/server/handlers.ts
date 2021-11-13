import {rest} from "msw";
import {starshipsMock, peopleMock} from "./mocks"

export const handlers = [
  rest.get('https://swapi.dev/api/people', (req, res, ctx) =>{
    return res(
      ctx.json(peopleMock),
      ctx.status(200)
    );
  }),
  rest.get('https://swapi.dev/api/starships', (req, res, ctx) =>{
    return res(
      ctx.json(starshipsMock),
      ctx.status(200)
    );
  })
]