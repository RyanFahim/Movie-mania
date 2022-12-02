import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError]= useState("false")

  console.log(movie);

  const getMovies = async(url) =>{
    try{
      const res = await fetch(url);
      const data = await res.json();

      console.log("Single movie data" +JSON.stringify(data, null, 2) );

      if (data.Response === "True"){
        setIsLoading(false);
        setMovie(data);
      }else
        setIsError({
          show: true,
          msg : data.error
        });
      }
    
     catch(error){
        console.log(error)
    }
  }


  useEffect(() => {
    let timer = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id])

if(isLoading){
  return(
    <div className="movie-section">
    <div className="loading">Loading...</div>
  </div>
  )
}

  return (
    <>
    

      <div className="movie-section single__movie">
        <div className="movie-card">
          <figure>
            <img src= {movie.Poster} alt="" />
          </figure>

          <div className="card-content">
            <h3 className="title"> {movie.Title} </h3>
            <p className="card-text"> {movie.Release} </p>
            <p className="card-text"> {movie.Genre} </p>
            <p className="card-text"> {movie.imdbRating} </p>
            <p className="card-text"> {movie.Country} </p>

            <NavLink to ="/" className= "back-btn">
              Go back
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMovie