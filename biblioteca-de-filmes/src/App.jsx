import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  

  return (
    <div className="app">
      <Navbar />
      <h2>Biblioteca de Filmes</h2>
      <Outlet />
    </div>
  )
}

export default App;
