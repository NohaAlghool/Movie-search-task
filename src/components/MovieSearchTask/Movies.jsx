import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './MoviContext'
import './Movies.css'
function Movies() {
    const { movei, isLoading } = MyContext()
    if (isLoading) {
        return (
            <>
                <h3 className="loading">Loading ...</h3>
            </>
        )
    }

    return (
        <div className='container'>
            <div className="row rowMovie">
                {movei.map((curMov) => {
                    const { imdbID, Title, Poster, Year } = curMov
                    const moveiName = Title.substring(0, 15);
                    return (
                        <NavLink key={imdbID} className='movieItem col-12 col-md-6 col-lg-4 col-xl-3' to={`movie/${imdbID}`}>
                            <div className="content my-5 rounded">
                                <h3 className='text-center'>{moveiName.length >= 10 ? `${moveiName}...` : moveiName}</h3>
                                <div className="img-div rounded mx-auto d-block" >
                                    <img className=' rounded  img-fluid' src={Poster} />
                                </div>
                                <div className="info d-flex flex-column justify-content-center align-items-center">
                                    <span className=''>{Year}</span>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    )
}

export default Movies