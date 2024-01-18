import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Movielist from "../../Components/MovieList/Movielist";

function Home() {
  const [popularMovies, SetPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => SetPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie, pos) => {
            return (
              <>
                <Link key={pos} to={`/movie/${movie.id}`}>
                  <div className="posterImg">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    />
                  </div>
                  <div className="overlay">
                    <div className="posterimg_overlay">
                      <div className="title">
                        {movie ? movie.original_title : ""}
                      </div>
                      <div className="runtime">
                        {movie ? movie.release_date : ""}
                        <span className="rating">
                          {movie ? movie.vote_average : ""}
                          <i className="fas fa-star" />{" "}
                        </span>
                      </div>

                      <div className="desc">{movie ? movie.overview : ""}</div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </Carousel>
        <Movielist />
      </div>
    </>
  );
}

export default Home;
