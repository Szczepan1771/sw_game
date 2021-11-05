import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./Views/Menu";
import PeopleBattle from "./Views/PeopleBattle";
import StarshipsBattle from "./Views/StarshipsBattle";
import { routes } from "./utils/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.menu} element={<Menu/>}/>
        <Route path={routes.people} element={<PeopleBattle/>}/>
        <Route path={routes.starships} element={<StarshipsBattle/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router