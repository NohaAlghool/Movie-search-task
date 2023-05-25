import React, { useContext, useEffect, useState } from 'react'

import { createContext } from 'react'

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movei, setMovei] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: '' })
    const [query , setQuery] =useState('titanic')


    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);


            if (data.Response === "True") {

                setIsLoading(false);
                setMovei(data.Search);
                setIsError({
                    show: false,
                    msg: '',
                })

            } else {


                setIsError({
                    show: true,
                    msg: data.Error
                })
            }


            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // sdetTimeOut => debounce() function  forces a function to wait
        //  a certain amount of time before running again.The function
        // is built to limit the number of times a function is called.
        let timerOut = setTimeout(()=>{
            getMovies(` ${API_URL}&s=${query}  `);
        },500)
        return ()=>clearTimeout(timerOut);
        // /////////////////////////////////////////////
    }, [query])


    return (
        <AppContext.Provider value={{ isError, isLoading, movei,query,setQuery , API_URL}}>
            {children}
        </AppContext.Provider>

    )
}

const MyContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, MyContext }