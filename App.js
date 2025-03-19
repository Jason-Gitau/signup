import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import NotFound from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Mpesa from './components/Mpesa';

function App() {
  return (
      <Router> 

    <div className="App">
      <header className="App-header">
        <h1>SOKOGARDEN BUYIN' 'EN SELLIN' ONLINE</h1>
      </header>
      <Routes>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/signin' element={<Signin/>} ></Route>
        <Route path='/addproducts' element={<Addproducts/>} ></Route>
        <Route path='/getproducts' element={<Getproducts/>} ></Route>
        <Route path='/notfound' element={<NotFound/>} ></Route>
        <Route path='/mpesa' element={<Mpesa/>}></Route>

      </Routes>
      
    </div>
      </Router>
  );
}

export default App;
