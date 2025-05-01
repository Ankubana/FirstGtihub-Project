import './App.css';
import Nav from './componets/nav.jsx';
import Footer from'./componets/footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx'
import BookInfo from './pages/BookInfo.jsx'
import {books} from './data';
import {BrowserRouter as Router,Route} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Route path="/" exact component={Home}/>
    <Route path="/books" exact render={()=><Books books={books}/>}/>
    <Route path="/books/:id" render={()=><BookInfo books={books}/>}/>
    
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
