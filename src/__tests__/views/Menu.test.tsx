import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "../../Views/Menu";
import { Provider } from "../../Context";
import { server } from "../../server";
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom'
import { rest } from "msw";
import { peopleMock } from "../../server/mocks";

const mockStore = {
  people: [],
  starships: []
}

const peopleText = "PEOPLE BATTLE";
const starshipsText = "STARSHIP BATTLE";
const errorText = "Error";

describe("Menu", () => {
  beforeEach(() => {
    process.env.REACT_APP_ENDPOINT = "https://swapi.dev/api"
    server.listen();
    render(
      <Provider initialValues={mockStore}>
        <BrowserRouter>
          <Menu/>
        </BrowserRouter>
      </Provider>
    );
  })
  test("Rendering test - loading data", async () => {
    server.use(
      rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.json(peopleMock),
          ctx.status(200)
        )
      })
    )
    expect(await screen.findByRole("progressbar")).toBeDefined();
  })
  test("Rendering test - after fetching data", async () => {
    const searchingPeopleText = await screen.findByText(peopleText);
    const searchingStarshipsText = await screen.findByText(starshipsText);
    expect(searchingPeopleText).toBeDefined();
    expect(searchingStarshipsText).toBeDefined();
  })
})

describe("Error", () => {
  test("Rendering test - error", async () => {
    server.use(
      rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
        return res(
          ctx.status(400)
        )
      })
    )
    server.use(
      rest.get('https://swapi.dev/api/starships', (req, res, ctx) => {
        return res(
          ctx.status(400)
        )
      })
    )
    render(
      <Provider initialValues={mockStore}>
        <BrowserRouter>
          <Menu/>
        </BrowserRouter>
      </Provider>
    );
    const searchingErrorText = await screen.findByText(errorText);
    expect(searchingErrorText).toBeDefined();
  })
  test("Rendering test - disabled starships button", async () => {
    server.use(
      rest.get('https://swapi.dev/api/starships', (req, res, ctx) => {
        return res(
          ctx.status(400)
        )
      })
    )
    server.use(
      rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
        return res(
          ctx.json(peopleMock),
          ctx.status(200)
        )
      })
    )
    render(
      <Provider initialValues={mockStore}>
        <BrowserRouter>
          <Menu/>
        </BrowserRouter>
      </Provider>
    );

    const searchingValue = await screen.findByText(starshipsText);
    expect(searchingValue.closest('button')).toHaveAttribute("disabled");
  })
  test("Rendering test - disabled starships button", async () => {
    server.use(
      rest.get('https://swapi.dev/api/starships', (req, res, ctx) => {
        return res(
          ctx.json(starshipsText),
          ctx.status(200)
        )
      })
    )
    server.use(
      rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
        return res(
          ctx.status(400)
        )
      })
    )
    render(
      <Provider initialValues={mockStore}>
        <BrowserRouter>
          <Menu/>
        </BrowserRouter>
      </Provider>
    );

    const searchingValue = await screen.findByText(peopleText);
    expect(searchingValue.closest('button')).toHaveAttribute("disabled");
  })
})