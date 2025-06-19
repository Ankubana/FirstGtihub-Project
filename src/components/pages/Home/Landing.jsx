 import axios from "axios";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { useState,useEffect } from "react";
 import Project from "./Project";
import { getValue } from "@testing-library/user-event/dist/utils";
import SelectMovie from "./selectedMove";


    const Landing=()=>{
    const [userData,setUserData]=useState(null)
    const [movephoto,setMoviephoto]=useState(null)
     const [moviesData,setMoviesData]=useState()
     const[submittedValue,setSubmittedValue]=useState('')
     const[result,setResult]=useState('')
     const [inputvalue,setInputvalue]=useState("")
    const [search,setSearch]=useState("fas fa-search")
    const [spinner,setSpinner]=useState(null)
    const [btn,setBtn]=useState("btn")
    async  function onloading(event){
     const{data}=await axios.get(`https://omdbapi.com/?apikey=4cfe7eb4&s=${submittedValue}`)
         setUserData(data?.Search?.map((data)=>data))
         setMoviesData(data)
         setSearch("Remove_Search")
         setSpinner("fa-spinner")
         setBtn("btn_bg")
         setInputvalue(submittedValue)
         setResult("Search results :")
      } 
     async function getValue(event)
      {    setSubmittedValue(event.target.value)
         const value= event.target.value
          if( event.key==='Enter'){
         const{data}=await axios.get(`https://omdbapi.com/?apikey=4cfe7eb4&s=${value}`)
         setMoviephoto(data?.Search?.map((data)=>data))
           setMoviesData(data)
          setInputvalue(submittedValue)
           setResult("Search results:")

         
}
      }
  return(
  <>
  
<section className="landing">
   <div className="header" > 
    
    <h1 className="header__title">Australia's most awarded movie subscription platform</h1>
    <h2 className="header__sub-title">FIND YOUR DREAM MOVIE  WITH <span className="text_purple">KUBARAINBOW</span></h2>
     <div className="Input__wrapper">
    <div className="search">
  <input
    className="searchInput"
    type="text"
    value={submittedValue}
    placeholder="Search by title, by actor"
    onChange={getValue}
    onKeyDown={getValue}
  />
</div>
<div className="loading__button">
  <button  type="sumit"className={btn} onClick={onloading}>
    <FontAwesomeIcon icon={search} className="SearchIcon" />
     <FontAwesomeIcon icon={spinner} spin />
  </button>
  </div>
  </div>
  </div>
  
  {submittedValue?
  <>
  <div className="search_value"> <span className="Result">{result}</span> <span className="value">{inputvalue}</span></div>
   <div className="project__select--move">
  <SelectMovie selectMovie={moviesData} inputval={submittedValue} />
  </div>
  </>
   :
   <>
   <Project movieSelected={userData} check={movephoto}/>  
   </>
  }
  </section>
    
  </>
    )
}
export default Landing