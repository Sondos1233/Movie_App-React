import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../../axios/axisConfig";
import MoviesCard from "./Moviecard";
import Moviedetails from "./Moviedetails";


const Movies = () => {
 
  const [Movies, setMovies] = useState([]);
  let [count, setCount] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(`/movie/popular?`, {
        params: {
          api_key: `b95d71488f9c45a469d42381ddaa5375`,
          page: `${count}`,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        //console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [count]);
  let handlePre = () => {
    let newCount = count == 1 ? count : --count;
    setCount(newCount);
    //console.log(count);
  };
  let handleNext = () => {
    let newCount = ++count;
    setCount(newCount);
  };
  return (
    <>
      <h1 className=" text-center my-5 text-success">All Movies</h1>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-secondary m-3 px-5 py-2 "
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
        <button
          type="button"
          className="btn btn-secondary m-3 px-5 py-2 "
          onClick={() => {
            handlePre();
          }}
        >
          Perv
        </button>
      </div>
      <div className="container">
        <div className="row">
          {Movies.map((movie) => {
             const { poster_path, original_title, vote_average, id } = movie;
             
            return (
              <div key={movie.id} className="col-3  text-center m-4 pb-2">
         
         <MoviesCard
                path={poster_path}
                title={original_title}
                vote={vote_average}
                id={id}
                page={'movies'}
              />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Movies;
