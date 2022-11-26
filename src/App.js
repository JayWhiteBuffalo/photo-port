import React from 'react';
import './App.css';
import About from './componets/About';
import Nav from './componets/Nav'; 

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
