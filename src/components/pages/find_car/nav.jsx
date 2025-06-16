import React from "react";
import {image} from "./Assets/"
 const nav=()=>{

    return(
        <section id="header_section">
<nav>
<figure className="logo">
<img src="" alt="" className="logo__img"/>
</figure>
 <ul className="nav__links">
  <li class="nav_link">
   <a  href="" className="link__hover-effect--purple">Home</a>
   </li>
    <li class="nav_link">
    <a href="Movies.html"className="link__hover--effect link__hover-effect--black">Find your Movie</a>
   </li>
   <li >
    <a href="" className="nav__link--primary">Contact</a>
   </li>
 </ul>
 <button className="btn__menu" onclick="openMenu()">
  <i class="fas fa-bars" aria-hidden="true"></i>
</button>
<div className="menu__backdrop">
 <button class="btn__menu btn__menu--close" onclick="closeMenu()">
     <i className="fas fa-times" aria-hidden="true"></i>
 </button>
 <ul className="menu_links">
   <li class="menu__list">
       <a href="#" class="menu__link" onclick="closeMenu()">Home</a>
   </li>
   <li class="menu__list">
      <a href="#features" class="menu__link" onclick="closeMenu()">Find your Movie</a>
  </li>
    <li class="menu__list">
      <a class="menu__link no-cursor" onclick="closeMenu()">Contacts</a>
   </li>
 </ul>
</div>
</nav>
</section>
    )
}
export default nav