import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/header';
import Home from './Page/Home/Home'
import Movie from './Page/Movie/Movie';
import Movielist from './Components/MovieList/movielist';

function App() {
  return (
    <>
    <Header/>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='movie/:id' element={<Movie/>} />
          <Route path='movies/:type' element={<Movielist/>} />          
          <Route path='/*' element={ <h1>404 ! Not Found</h1> } />
        </Routes>
    </>
  )
}

export default App
