import React from 'react'
import { useState, useEffect } from "react";
import { Form } from 'react-router-dom';
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRateMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

         console.log(data);   
        
    };

    useEffect(() => {
        const topRateUrl = `${moviesURL}top_rated?${apikey}`;

        getTopRateMovies(topRateUrl);
    }, []);

    return
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>carregando...</p>}
                {topMovies.lenght > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>

    return (
        <div>Home</div>
    )
};

export default Home;