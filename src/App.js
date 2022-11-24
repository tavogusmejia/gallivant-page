import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/> {/* <Route path='/' element={<Home />}/>  component={Home} */ }
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
