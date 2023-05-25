import React from 'react'
import Home from './Home'
import SingleMovie from './SingleMovie'
import Error from './Error'
import { Routes, Route } from 'react-router-dom'
function Main() {
    return (
        <>
            {/* <h2 className=' main-title text-center'>Movie Task </h2> */}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='movie/:id' element={<SingleMovie/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        
        </>


    )
}

export default Main