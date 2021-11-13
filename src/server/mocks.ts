import { PeopleObjectType, StarshipObjectType } from "../types";

const peopleMock: PeopleObjectType[] = [
  {
    name: "Luke Skywalker",
    mass: "77",
    birth_year: "19BBY"
  },
  {
    name: "C-3PO",
    mass: "75",
    birth_year: "112BBY"
  },
  {
    name: "R2-D2",
    mass: "32",
    birth_year: "33BBY"
  },
  {
    name: "Darth Vader",
    mass: "136",
    birth_year: "41.9BBY"
  },
  {
    name: "Leia Organa",
    mass: "49",
    birth_year: "19BBY"
  },
];

const starshipsMock: StarshipObjectType[] = [
  {
    name: "CR90 corvette",
    crew: "30-165",
    model: "CR90 corvette"
  },
  {
    name: "Star Destroyer",
    crew: "47,060",
    model: "Imperial I-class Star Destroyer"
  },
  {
    name: "Sentinel-class landing craft",
    crew: "5",
    model: "Sentinel-class landing craft"
  },
  {
    name: "Death Star",
    crew: "342,953",
    model: "DS-1 Orbital Battle Station"
  },
  {
    name: "Millennium Falcon",
    crew: "4",
    model: "YT-1300 light freighter"
  },
];

export {
  peopleMock,
  starshipsMock
}