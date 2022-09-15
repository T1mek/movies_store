import React from 'react';
import Header from './components/Header/Header';


import './App.scss';
import HomePage from './pages/Homepage/HomePage';





const App : React.FC=()=> {
  return (
    <div className="App">
      <Header />
      <hr />
      <HomePage />
    </div>
  );
}

export default App;
