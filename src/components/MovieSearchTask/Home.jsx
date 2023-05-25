import React from 'react'
import Nav from './Nav'
import Search from './Search'
import Movies from './Movies'

function Home() {

    return (
        <div className='Movies'>
            {/* <Nav/> */}
            <Search/>
            <Movies/>
        </div>
    )
} 

export default Home