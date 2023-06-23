import React from 'react'
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notestate from './context/notes/Notestate';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route exact path="/" element={<Navbar />}>
      
        <Route exact path="/" element={<Home/>} />

        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
 
      </Route>
    )
  );
  return (
    <div className="App">
      <Notestate>

  <RouterProvider router={router} />
 
  </Notestate>
 
  </div>
  );
}

export default App;
