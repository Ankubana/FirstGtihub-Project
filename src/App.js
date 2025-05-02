import './App.css';
import { useEffect, useState } from 'react';
import Nav from './componets/nav.jsx';
import Footer from'./componets/footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx'
import BookInfo from './pages/BookInfo.jsx'
import {books} from './data';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Cart from './pages/Cart.jsx';
function App() {
  const [cart,setCart]=useState([])
  function addTocart(book){
   const dupeItem=cart.find(item=>+item.id===+book.id)
  if (dupeItem)
  { 
 
    setCart(cart.map(item=>{
      if(item.id===dupeItem.id)
      {
        console.log(item.id)
        return{
          ...item,quantity:item.quantity+1
        }
     }else
     { return item}
  } 
))
} else { setCart([...cart,{...book,quantity:1}])}
  } 
  useEffect(()=>{
  console.log(cart)
  },[cart])
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Route path="/" exact component={Home}/>
    <Route path="/books" exact render={()=><Books books={books}/>}/>
    <Route path="/books/:id" render={()=><BookInfo books={books} addTocart={addTocart}/>}/>
    <Route path="/cart" render={()=><Cart books={books} />}/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
