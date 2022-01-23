
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axisConfig";

const Moviedetails = () => {

  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axiosInstance
    .get(`/movie/${params.id}`,{
    
      params:{
        api_key:`b95d71488f9c45a469d42381ddaa5375`,
      }
      
  }).then((res) => setMovie(res.data),
  
  )
      .catch((err) => console.log(err));
  }, []);

     
  return (
    
    <>
    <div>
        <div className="card m-5 p-2" >
        <p><b>overview: </b>{movie.overview}</p>
        <p><b>vote: </b>{movie.vote_average}</p>
        <p><b>vote_count: </b>{movie.vote_count}</p>
        <p><b>Budget: </b>{movie.budget}</p>
        <p><b>original_language: </b>{movie.original_language}</p>
        <p><b>original_title: </b>{movie.original_title}</p>
        
        </div>
       
    </div>
   
    </>

  );
};

export default Moviedetails;