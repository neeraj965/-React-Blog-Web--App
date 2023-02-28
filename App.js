import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
import Post from './components/post/Post.jsx'


import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default function App (){

    return(

        <BrowserRouter>
        <Navbar/>
       
      
      


       <Routes>


        
        <Route  path='/post' element={<Post/>}>Post</Route>
        <Route  path='/about' element={<About/>}>About</Route>
        <Route  path='/' element={<Home/>}>Home</Route>
        </Routes>
        </BrowserRouter>
      
    )
}