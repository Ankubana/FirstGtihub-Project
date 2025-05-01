import React from "react";
import Landing from '../componets/Landing.jsx'; 
import Highlights from '../componets/Highlights.jsx';
import Featured from '../componets/Features.jsx';
import Discounted from '../componets/Discounted.jsx';
import Explore from '../componets/explore.jsx';
const Home=()=>{
    return(
        <>
         <Landing/>
          <Highlights/>
          <Featured/>
          <Discounted/>
          <Explore/>
        </>
    )
} 
export default Home