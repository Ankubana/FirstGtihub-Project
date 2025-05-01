import React,{ useState} from "react";
import Book from '../componets/UI/Book'
const Books=({books:initialBooks})=>{
  const [books,setBooks]=useState(initialBooks);
   function filterBooks(filter){
    if (filter==='LOW_TO_HIGH')
    {
     setBooks(books.slice().sort((a,b)=>(a.salePrice||a.originalPrice)-(b.salePrice||b.originalPrice)))
    }
    if (filter==='HIGH_TO_LOW')
    {
      setBooks(books.slice().sort((a,b)=>(b.salePrice||b.originalPrice)-(a.salePrice||a.originalPrice))) 
   }
  
   if (filter==='Rating')
    { 
      console.log("Rating")
      setBooks(books.slice().sort((a,b)=>(b.rating)-(a.rating)))
  }  
 }
  return(
    <div id="books__body">
    <div id="books__main">
    <section className="books__container">
    <div className="row">
     <div className="books__header">
     <h2 className="section__title books__header--title">All Books</h2>
      <select id="filter" defaultValue="DEFAULT" onChange={(event)=>filterBooks(event.target.value)}>
        <option value="DEFAULT" disabled >sort</option>
        <option value="LOW_TO_HIGH">price, LOW_TO_HIGH</option>
        <option value="HIGH_TO_LOW">price, HIGH_TO_LOW </option>
        <option value="Rating">Rating</option>
      </select>
     </div>
      <div className="books">
        {
        books.map((book=><Book  book={book}/>))
        }
      </div>
    </div>
    </section>
    </div>
    </div>
  )
} 
export default Books