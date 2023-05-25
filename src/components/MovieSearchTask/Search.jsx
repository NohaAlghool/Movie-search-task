import React, { useState } from 'react'
import './Movies.css'
import img1 from './images/search.png'
import { MyContext } from './MoviContext'
function Search() {
  const { query, setQuery , isError } = MyContext()
  return (
    <div className='container'>
      <div className="row">
        <form action='#' onSubmit={(e) => e.preventDefault()}>
          <div className="search col-12">
            <div className="inputContent">
              <img src={img1} className='searchImg' />
              <input className='searchInput' type="text" placeholder='search a movei .....'
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="cardError my-3">
        <p className='error p-2 rounded'>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}

export default Search