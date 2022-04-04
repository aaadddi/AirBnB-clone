import './App.css';
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SearchPage from './Components/SearchPage'
import { Router } from 'react-router-dom';

import {BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
 
  return (
  <div className="app">
    <BrowserRouter>
 <Header/>
 <Routes>
   <Route path = '/' element={<Home/>}/>


<Route path = "/search" element={<SearchPage/>}/>


</Routes>
 <Footer/>
 </BrowserRouter>
  </div>
  );
}

export default App;
