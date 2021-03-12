import './App.css';
import Titre from './MyComponents/Titre';
import React from 'react';
import Etage from './MyComponents/Etage';


function App() {

  return (
    <div className="page">
      <div className="titre">
        <Titre></Titre>
      </div>
      <Etage></Etage>   
    </div>
  );
}

export default App;
