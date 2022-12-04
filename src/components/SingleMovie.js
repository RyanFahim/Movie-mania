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
            <center>
              <p className="card-text"> {movie.Plot} </p>
            </center>
            <p className="card-text"> <span>Release Date:</span> {movie.Released} </p>
            <p className="card-text"> <span>Genre:</span> {movie.Genre} </p>
            <p className="card-text"> <span>Runtme:</span> {movie.Runtime} </p>
            <p className="card-text"> <span>Director: </span>{movie.Director} </p>
            <p className="card-text"> <span>Writer: </span>{movie.Writer} </p>
            <p className="card-text"> <span>Actors: </span>{movie.Actors} </p>
            <p className="card-text"> <span>Country: </span>{movie.Country} </p>
            <p className="card-text"> <span>Language: </span>{movie.Language} </p>
            <p className="card-text"> <span>Awards: </span>{movie.Awards} </p>
            <p className="card-text"> <span>IMBD: </span> {movie.imdbRating} </p>
            <p className="card-text"> <span>Rotten Tomatos </span>{movie.Ratings[1].Value} </p>
            <p className="card-text"> <span>Box-office: </span>{movie.BoxOffice} </p>

              <br />
            <NavLink to ="/" className= "back-btn">
              Go back
            </NavLink>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMovie