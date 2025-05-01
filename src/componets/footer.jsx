import React from "react"
import {Link} from "react-router-dom";
import logo from '../assets/Library.svg'
const footer=()=>{
    return(
        <footer>
        <div className="container">
        <div className="row row__column">
        <Link to="">
        <figure className="footer__logo">
         <img src={logo} className="footer__logo--img"alt=""/>
        </figure>
        </Link>
        <div className="footer__list">
            <Link to="/"   className="footer__link">home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/book" className="footer__link">books
            </Link>
            <Link to="/cart" className="footer__link">cart
            </Link>
        </div>
        <div className="footer__copyright">Copyright &copy;2021 Library</div>
        </div>
        </div>
        </footer>
         )
}
 export default footer
