import React from "react";
import { link } from "react-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

const Navbar = () => {
    return (
        <nav id='navbar'>
        <h2>
          <link to="/"><BiCameraMovie />BlibiotecaFilmes</link>
        </h2>
        <form typeof="text" placeholder="Busque um filme" />
        <button type="submit">
            <BiSearchAlt2 />
        </button>
      </nav>
    )
}

export default Navbar;