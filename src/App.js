import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Profile} from './components/Profile';
import {Home} from './components/Home';
import { useState, createContext} from 'react';

export const AppContext = createContext();

function App(){
  const [userName,setUserName] = useState("Varan");
  return (
    <div className='App'>
      <AppContext.Provider value={{userName,setUserName}}>
      <Router>
        <div>
          <Link to='/'>Home</Link> <span> </span>
          <Link to='/profile'>Profile</Link> 
        </div>
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/profile' element = {<Profile />}/>
          <Route path = '*' element = {<h1>Error page</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;