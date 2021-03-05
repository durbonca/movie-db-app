import React, {useState} from "react";
import MovieCard from "./MovieCard"

export default function SearchMovies(){

    const randomWords = require('random-words');

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    const getRandomWord = async () => {
        setQuery(randomWords())
    }

    const searchMovies = async (event) => {
        event.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e2d0b7f154975768708e01ba3e8d3e2b&language=es-ES&query=${query}&page=1&include_adult=false`;
        fetch(url)
        .then(Response => Response.json())
        .then(data => {setMovies(data.results)})
        .catch(error=> console.error(error))
    }
 
    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label 
                className="label" 
                htmlFor="query">Movie Name
            </label>

                <input 
                    className="input"
                    id="query" 
                    name="query" 
                    type="text"
                    value={query}
                    required
                    onChange={(e)=> setQuery(e.target.value) }
                    placeholder="search movie for title"/>
    
                <button 
                    type="submit" 
                    className="button background--blue">
                        Search
                </button>
                <button 
                    type="submit"
                    onClick={getRandomWord} 
                    className="button background--green">
                        Am Going to get lucky!
                </button>
        </form>
        
        <div className="card--list">
            {movies.filter(movie => movie.poster_path).map(movie=> (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>

        </>
    )
}