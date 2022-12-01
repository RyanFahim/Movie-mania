import React, { useContext } from 'react'
import { useGlobalContext } from "../components/Context"
import Movie from './Movie'
import Search from "./Search"

const Home = () => {
    
  return (
    <>
        <Search/>
        <Movie/>
        
    </>
  )
}

export default Home