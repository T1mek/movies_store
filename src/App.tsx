import React from 'react';
import Header from './components/Header/Header';
import {Route,Routes} from "react-router-dom";
import FullFilm from "./pages/FullFilms/FullFilm";
import './App.scss';
import HomePage from './pages/Homepage/HomePage';








const App : React.FC=()=> {




  return (
    <div className="App">
      <Header />

        <Routes>


            <Route path='/' element={<HomePage />}  />
            <Route path='/films/:filmId' element={<FullFilm/>}/>

        </Routes>
    </div>
  );
}

export default App;
