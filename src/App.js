import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import NavBar from './Components/Navbar/NavBar';
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import DetailPage from "./Pages/DetailPage/DetailPage";

import './App.css';


function App() {

  const [teamHero, setTeamHero] = useState(null);

  return (
    <>
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<Home teamHero={teamHero} setTeamHero={setTeamHero} />} />
        <Route path="search" element={<Search teamHero={teamHero} setTeamHero={setTeamHero}/>} />
        <Route path="search" element={<Search teamHero={teamHero} setTeamHero={setTeamHero}/>} />
        <Route path="heroe/:id" element={<DetailPage teamHero={teamHero} setTeamHero={setTeamHero}/>} />

      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;