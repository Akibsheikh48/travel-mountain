import React from 'react';
import './App.css';
import Body from './pages/Body';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
