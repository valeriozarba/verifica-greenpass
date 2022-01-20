import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './components/FileUpload';

function App() {

  

  return (

    <div className="App">
      
        <header className="App-header">
            <h3>Valida GreenPass</h3>
        </header>
        <div>
            <FileUpload />
        </div>

    </div>
  );
}

export default App;
