import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link, useParams} from "react-router-dom"
import React from "react";
import Rating from "../componets/UI/Rating";
import Price from "../componets/UI/Price";
import Book from "../componets/UI/Book";



const BookInfo=({books})=>{
    const {id}=useParams()
    const book=books.find(book => +book.id ===+id)
     console.log(book)
    return(
      <div className="books__body">
      <div className="books__main">
        <div className="books__container">
            <div className="row">
            <div className="book__selected--top">
            <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left"/>
            </Link>
            <Link to="/books" className="book__link">
             <h2 className="book__selected--title--top">Books</h2>
            </Link>
            </div>
            <div className="book__selected">
                <figure className="book__selected--figure">
                 <img src={book.url} alt="" className="book__selected--ig" />
                </figure>
                <div className="book__selected--description">
                 <div className="book__selected--title">{book.title}
                 </div>
                  <Rating rating={book.rating}/>
                  <div className="book__selected--price">
                     <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                  </div>
             
                <div className="book__summary">
                 <div className="book__summary--title">Summary</div>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sit?
                    Quibusdam, labore, odio corporis similique accusantium saepe totam temporibus
                    repellendus hic cum deserunt aperiam quis quas sit maiores aliquam corrupti?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit porro velit eos mollitia nobis ipsam sunt esse explicabo non
                     reprehenderit tempore nam ad deleniti, quasi, ipsum vitae natus praesentium adipisci.
                  </p>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sit?
                    Quibusdam, labore, odio corporis similique accusantium saepe totam temporibus
                    repellendus hic cum deserunt aperiam quis quas sit maiores aliquam corrupti?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit porro velit eos mollitia nobis ipsam sunt esse explicabo non
                     reprehenderit tempore nam ad deleniti, quasi, ipsum vitae natus praesentium adipisci.
                  </p>
                  <button className="btn"> Add to cart</button>
                </div>
                </div>
            </div>
            </div>
              <div className="books__container">
               <div className="row">
                <div className="book__selected--top">
                <h3 className="book__selected__title--top">
                  Recommended Books
                </h3>
               </div>
               <div className="books">
                {
                 books.filter((book)=>book.rating===5 && (+ book.id!==+id))
                  .slice(0,4)
                  .map((book)=><Book book={book} key={id}/>)
                }
               </div>
               </div>
             </div>
        </div>
      </div>
      </div>

    )
}
export default BookInfo