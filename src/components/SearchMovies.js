import React from "react";

export default function SearchMovies(){
    
    const searchMovies = async (event) => {
        event.preventDefault()
        console.log('')

        const query = 'Jurassic Park'
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e2d0b7f154975768708e01ba3e8d3e2b&language=en-US&query=${query}&page=1&include_adult=false`;
        
        let movies = await fetch(url)
        .then(Response => Response.json())
        .then(data => {return (data)})
        .catch(error=> console.error(error))
        
        console.log(movies)
    }
 
    return (
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
                    placeholder="search movie for title"/>

                <button 
                    type="submit" 
                    className="button">
                        Search
                </button>
        </form>
    )
}