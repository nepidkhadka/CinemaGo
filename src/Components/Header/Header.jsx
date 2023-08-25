import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function header() {
    return (
        <div className='header' >
            <div className='headerLeft' >
                <Link to="/"> <img className='header_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'/></Link>
                <Link to="/movies/popular" className='header_icon'>Popular</Link>
                <Link to="/movies/top_rated" className='header_icon'>Top Rated</Link>
                <Link to="/movies/upcoming" className='header_icon'>Upcoming</Link>

            </div>
        </div>
    )
}

export default header