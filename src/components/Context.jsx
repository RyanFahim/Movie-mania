// We need 
// a const 
// a providerre
// a consumer -> useContext()
import React, { useEffect, useState } from "react";
import { useContext } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=batman`;
const AppContext = React.createContext();

// need to create a global fucntion
// Now wrap App.js with AppContext 

const AppProvider = ({children})=>{

    const [isLoading,setIsLoading] =useState(true)
    const [isError, setIsError] = useState({ show:"false", msg:""});
    const [movie,setMovie] = useState([])

    const getMovies = async(url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)

            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search)
                setIsError({show: "false", msg: " "})
            }else{
                setIsError({
                    show:"true",
                    msg: data.Error
                })
            }

        } 
        catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
         getMovies(API_URL)
    },[])

    return <AppContext.Provider value= {{isError, isLoading, movie}}>
        {children}
    </AppContext.Provider>
};

// creating a global useContext
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export{ AppContext, AppProvider, useGlobalContext }