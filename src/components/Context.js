// We need 
// a const 
// a providerre
// a consumer -> useContext()
import React, { useEffect, useState } from "react";
import { useContext } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

// need to create a global fucntion
// Now wrap App.js with AppContext 

const AppProvider = ({children})=>{

    const [isLoading,setIsLoading] =useState(true)
    const [isError, setIsError] = useState({ show:"false", msg:""});
    const [movie,setMovie] = useState([])
    const [query, setQuery] = useState('batman');

    // console.log(query);
    const getMovies = async(url) =>{
        setIsLoading(true);
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
        let timer = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        }, 1000);

        return ()=> clearTimeout(timer);

    },[query])

    return <AppContext.Provider value= {{isError,setIsError, isLoading, movie, query, setQuery}}>
        {children}
    </AppContext.Provider>
};

// creating a global useContext
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export{ AppContext, AppProvider, useGlobalContext }