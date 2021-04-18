import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import "./Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerurl,setTrailerUrl]=useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // console.log(request.data.results);
      const data = request.data.results;
      setMovies(data);

      return request;
    }
    const temp = fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };
  // console.log(movies);
  const handleClick=(movie)=>{
    if(trailerurl)
    {
      setTrailerUrl('');
    }else
      {
      movieTrailer(movie?.name|| "")
      .then((url)=>{
        const urlParams =new URLSearchParams( new URL(url).search);
        console.log(urlParams);
        setTrailerUrl(urlParams.get('v'));
      }).catch(error=>console.log(error));
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
     {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  );
}

export default Row;
