import React, {useState} from "react";
import MovieCard from "./MovieCard"

export default function SearchMovies(props){
    const {en, language} = props

    const randomWords = require('random-words');

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    
    const getRandomWord = async () => {
        setQuery(randomWords())
    }

    const searchMovies = async (event) => {
        event.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e2d0b7f154975768708e01ba3e8d3e2b&language=${language}&query=${query}&page=1&include_adult=false`;
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
                htmlFor="query">{ en ? 'Movie Name' : 'Nombre de Pelicula'}
            </label>

                <input 
                    className="input"
                    id="query" 
                    name="query" 
                    type="text"
                    value={query}
                    required
                    onChange={(e)=> setQuery(e.target.value) }
                    placeholder={en?'search movie for title':'Buscar pelicula por titulo'}/>
    
                <button 
                    type="submit" 
                    className="button background--blue">
                        {en ? 'Search' : 'Buscar' }
                </button>
                <button 
                    type="submit"
                    onClick={getRandomWord} 
                    className="button background--green">
                        {en ? 'Am Going to get lucky!' : 'Voy a tener suerte!' }
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