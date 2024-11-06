import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer'
import NavBar from "./NavBar";
import CreatePlayerForm from "./CreatePlayer";

const App = () => {

  return (
    <>
      <NavBar />
      <h1>Puppy Bowl</h1>
      <Routes> 
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />  
        <Route path="/new-player" element={<CreatePlayerForm />} />
      </Routes>
    </>
  );
}

export default App;