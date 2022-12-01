import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'

const Movie = () => {
    const {movie} =useGlobalContext();
    

  return (
    <>
        <div className="section movie-page">
          <div className="grid grid-3-col container">
            {movie.map((curMovie)=>{
              const {imdbID, Title, Poster} = curMovie;
              const movieName = Title.substring(0, 15);
              return(
                <NavLink to={`movie/${imdbID}`}>
                  <div className="card">
                    <div className="card-info">
                      <h2> {movieName.length>=15 ? `${movieName}...`: movieName} </h2>
                      <img src= {Poster} alt= {imdbID} className= "movie_poster" />
                    </div>
                  </div>
                </NavLink>
               );
            })}
          </div>
        </div>
        
    </>
  )
}

export default Movie