import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './MoviContext'

function SingleMovie() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true);
  const [movei, setMovei] = useState('');

  const getMovies = async (url) => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovei(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies(` ${API_URL}&i=${id}  `);
  }, [id]);

  if (isLoading) {
    return (
      <div className="moveiSection">
        <h3 className="loading">Loading ...</h3>
      </div>
    )
  }



  return (
    <section className="singleMovei d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className='singlemovieItem d-flex mx-auto rounded flex-column flex-md-row w-50'>
            <div className="singleMovimg-div rounded d-block" >
              <img className='singleMovImg rounded img-fluid' src={movei.Poster} />
            </div>
            <div className="singleMivContent d-flex flex-column justify-content-center">
              <h3>{movei.Title}</h3>
              <p>{movei.Released}</p>
              <p>{movei.Genre}</p>
              <p>{movei.imdbRating}</p>
              <p>{movei.Country}</p>
              <NavLink to="/">
                <button className=' btn'> back</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SingleMovie