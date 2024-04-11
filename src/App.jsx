import {useState,useEffect} from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from "./pages/auth/Login";
import BlogDetails from './pages/BlogDetails';
const App=()=>{ 

  return (
     <>
     <BrowserRouter>
        <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/blog/:id" element={<BlogDetails/>}/>
        </Routes>
     </BrowserRouter>
     </>
  )
}
export default App