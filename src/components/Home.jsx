import React, { useContext } from 'react'
import { useGlobalContext } from "../components/Context"
import Movie from './Movie'
import Search from "./Search"

const Home = () => {
    
  return (
    <>
    <h1 className= "home-h1">Movie Mania</h1>
        <Search/>
        <Movie/>
        
    </>
  )
}

export default Home