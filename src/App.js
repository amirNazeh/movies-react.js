import Movies from "./Component/movies/movies";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route , Routes} from "react-router-dom"
 import MovieDetails from "./Component/movie_details/movie_details";
 import Navebar from'./Component/navebar/navebar';
 import Favorite from './Component/favorite/favorite.js'
 import {LanguageProvider} from './contexts/language'
 import { useState } from 'react';
 function App() {
  const [language,setLanguage] = useState("en")
  return (
    
    <div className="container-fluid">
      <LanguageProvider value={{language,setLanguage}}>
      <Navebar/>

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/fav" element={<Favorite />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </LanguageProvider>
    </div>
  );
}

export default App;
