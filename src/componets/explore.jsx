import React from "react";
import {Link} from "react-router-dom";
const explore=()=>{
     return(
        <section id="exprole">
            <div className="container">
            <div className="row row__column">
             <h2 className="">
            explore more <span className="purple">books</span> 
            </h2>
             <Link to="book">
              <button className="btn">Exprole Books</button>
            </Link>
           
            </div>
            </div>
        </section>
     )
}
export default explore