import React from 'react';
import Header from './components/Header/Header';
import {Route,Routes} from "react-router-dom";
import FullFilm from "./pages/FullFilms/FullFilm";
import './App.scss';
import HomePage from './pages/Homepage/HomePage';








const App : React.FC=()=> {

const [search,setSearch]=React.useState('')

  return (
    <div className="App">
      <Header setSearch={setSearch} />

        <Routes>


            <Route path='/' element={<HomePage search={search} />}  />
            <Route path='/films/:id' element={<FullFilm/>}/>

        </Routes>
    </div>
  );
}

export default App;
