import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import {BookList} from'./components/BookList'
import { NavBar } from './components/NavBar';
import {FavList } from './components/FavList';
import React from 'react';
import { useState } from 'react';

export const bookListContext=React.createContext(null);


function App() {

  const [bookList,setBookList]=useState([])   
  return(
    <Router>
       <div className="app">

       <bookListContext.Provider value={{ bookList,setBookList}}>
<NavBar/>
<Switch>
  <Route  exact path="/Booklist" >
<BookList/>
</Route>
<Route exact path="/FavList" >
<FavList/>
</Route>
</Switch>

</bookListContext.Provider>
      </div>
    </Router>
  );
  
}

export default App;
