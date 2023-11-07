import { useState } from 'react';
import { link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  

  return (
    <div className="app">
      <nav id='navbar'>
        <h2>
          <link to="/">BlibiotecaFilmes</link>
        </h2>
        <link to="/movie/1">movie</link>
        <link to="/search">Search</link>
      </nav>
      <h2>Biblioteca de Filmes</h2>
      <Outlet />
    </div>
  )
}

export default App;
