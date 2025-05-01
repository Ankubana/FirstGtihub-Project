 import React from "react";
 import {Link} from "react-router-dom";
 import  UndrawBooks from '../assets/Undraw_Books.svg';
const Landing=()=>{
     return (
     <section>
     <div className="header__container">
     <div className="header__description">
      <h1 className="purple">American's most awarded online Library platform</h1>
        <h2> find your dream book with <span className="purple">Library</span></h2> 
        <Link to="/books">
        <button className="btn">
            Brouse Books
        </button>
        </Link>
      </div>
       <figure>
    <img src={UndrawBooks}  alt="" />
       </figure>
     </div>
     </section>

     )
} 
export default Landing