import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import Highlight from "./UI/highlight.jsx";
const Highlights=()=>{
    return(
           <section>
           <div id="highlights">
            <div className="container">
             <div className="row">
              <h2 className="section__title">
                my choice <span className="purple">Library</span>
              </h2> 
              <div  className="highlight__wrapper">
              <Highlight icon={ <FontAwesomeIcon icon="bolt"/>}
              title="Easy and Quick" 
               paragraphe="Get access to the book you purchased online instantly"/>
                 <Highlight icon={ <FontAwesomeIcon icon="book-open"/>}
              title="10,000+Books" 
               paragraphe="Library has books in all your favorite categories"/>
                 <Highlight icon={ <FontAwesomeIcon icon="tags"/>}
              title="Easy and Quick" 
               paragraphe="Get your hands book on popural as litle $10"/>
                </div>
                 </div>
                </div>
                </div>
         </section>

    )
}

 export default Highlights