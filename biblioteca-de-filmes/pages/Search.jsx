import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../src/components/movieCard';

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css"

const Search = () => {
    return (
        <div>Search</div>
    )
};

export default Search;