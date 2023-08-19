import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './/Components/Header/header';
import Home from './Page/Home/Home'

function App() {

  return (
    <>
    <Router>
    <Header/>
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path="movie/:id" element={ <h1>Movie Detail Page</h1> } ></Route>
          <Route path='movie/:type' element={ <h1>Movie List Page</h1> } ></Route>
          <Route path='/*' element={ <h1>404 ! Not Found</h1> } ></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
