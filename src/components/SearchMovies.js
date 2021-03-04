import React from "react";

export default function SearchMovies(){
    return (
        <form className="form">
            <label 
                for="query" 
                className="label" 
                htmlFor="query">Movie Name:
            </label>

                <input 
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