import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import MovieDesc from "./Movie_description";
import axios from "axios";

 const SelectMovie=({selectMovie,inputval})=>{
     const [movieId,setMovieId]=useState("")
     const [data,setData]=useState()
      const Navigate = useNavigate();
      console.log(inputval)
     async  function movie_Description(value){
     const MovieId=value
     console.log(MovieId)
     const{data}=await axios.get(`https://omdbapi.com/?apikey=4cfe7eb4&s=${value}`)
          setData(data)
          setMovieId(MovieId)
          console.log(MovieId)
          if (MovieId)
           Navigate(`/Movie_description/${MovieId}`);
    }
    
return(
<>

     {
      selectMovie?.Search?.slice(0,6).map((movie)=>(
         <> <div>
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
</>

  )

 }
 export default SelectMovie