import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Movie from "./Page/Movie/Movie";
import Movielist from "./Components/MovieList/Movielist";
import Header from "./Components/Header/Header";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<Movielist />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<h1>404 ! Not Found</h1>} />
        </Routes>
      </AuthContextProvider>
  );
}

export default App;
