import React from 'react'
import { useGlobalContext } from './Context'

const Movie = () => {
    const {movie} =useGlobalContext();
  return (
    <>
        {movie.map((currMovie)=>{
            return <div>{currMovie.Title}</div>
        })}
    </>
  )
}

export default Movie