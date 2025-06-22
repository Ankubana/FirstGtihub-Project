import React, { useState } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import MovieDesc from "./Movie_description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
 const SelectMovie=()=>{
     const [movieId,setMovieId]=useState("")
     const [data,setData]=useState()
      const Navigate = useNavigate();
       const location = useLocation();
   const {inputvalue,check,Data} = location.state || {};
     console.log(inputvalue)
   const filteredMovies = Data?.Search?.filter(
    (movie) => movie?.Poster && movie.Poster !==""
  ) || [];
     console.log(filteredMovies)
   async  function movie_Description(value){
     const MovieId=value
     const{data}=await axios.get(`https://omdbapi.com/?apikey=4cfe7eb4&s=${value}`)
          setData(data)
          setMovieId(MovieId)
          if (MovieId)
           Navigate(`/Movie_description/${MovieId}`);
    }
     
return(
<>
{ 
check!==1?
 <div className="arrow-navigation">
           
          <Link to="/">
          <FontAwesomeIcon icon="arrow-left" value="Back"className="arrow-left"/>
           </Link>
           <div className="Result"> Search Results:<span className="text_purple">"{inputvalue}"</span></div>  
            </div>
          :
  <div className="arrow-navigation">
           
          <Link to="/LandingPage">
          <FontAwesomeIcon icon="arrow-left" value="Back"className="arrow-left"/>
           </Link>
            <div className="Result"> Search Results:<span className="text_purple">"{inputvalue}"</span></div>  

                      </div>
          
 } 
 
<div className="card-row">
       
     {

  
      filteredMovies?.map((movie)=>(
         <> 
     
    <div className="movie_card">
  <img 
    src={movie?.Poster} 
    alt={movie?.Title} 
    className="project__images zoom-image"  
    onClick={() => movie_Description(movie.imdbID)} 
  />

  <div className="movie_Desc">
    <span className="movie_Title">Title: </span>{movie?.Title}
  </div>
  <div className="movie_Desc">
    <span className="movie_Year">Year: </span>{movie?.Year}
  </div>
  <div className="movie_Desc">
    <span className="movie_Type">Type: </span>{movie?.Type}
  </div>

          { movieId?
          <MovieDesc  Data={data}  idmb={movieId}/>
           :null
 } 
 </div>

  
   
            </>
    
      )
       
        )
      
   
      }
      </div>
</>

  )

 }
 export default SelectMovie