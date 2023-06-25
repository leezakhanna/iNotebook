import React,{useState} from 'react'
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
import Alert  from './components/Alert';
function App() {

  const [alert,setAlert]=useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  const router = createBrowserRouter(
   
    createRoutesFromElements(
     
      <Route exact path="/" element={<Navbar/>}>
   
        <Route exact path="/" element={<><Alert alert={alert} /><Home showAlert={showAlert}/></>} />

        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element={<><Alert alert={alert} /><Login showAlert={showAlert}/></>} />
        <Route exact path="/signup" element={<><Alert alert={alert} /><Signup showAlert={showAlert}/></>} />
 
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
