
import React from 'react'
import { Link,Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();
  
  const handleLogout=()=>{
   
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
  <>
<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="block h-8 w-auto lg:hidden" src="logo.png" alt="Your Company"/>
          <button
        className="w-8 h-8 rounded-full bg-gray-800 text-black dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-300  focus:ring-black"
        aria-label="edit note"
        role="button"
      >
        <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="3" width="14" height="18" rx="2" />  <line x1="9" y1="7" x2="15" y2="7" />  <line x1="9" y1="11" x2="15" y2="11" />  <line x1="9" y1="15" x2="13" y2="15" /></svg>
          </button>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">iNotebook</Link>
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
           
           </form>:<Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>}
            
           
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
   

        {/* <!-- Profile dropdown --> */}
        <div className=" relative ml-3">
          <div className='flex'>
        
          {!localStorage.getItem('token')?<form className="d-flex" role="search">
           
      </form>:<button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleLogout}>Logout</button>}
           
          </div>

          {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
         
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">iNotebook</Link>
      
      <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</Link>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
           
           </form>:<Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>}
          
    </div>
  </div>
</nav>

     {/* <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  
    <Link to= "#" className="navbar-brand" >iNotebook</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
     {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to= "/" className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to= "/about" className={`nav-link ${location.pathname==="/about"? "active": ""}`} >About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
      </form>:<button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
    </div>
  </div> 
</nav>    */}

<Outlet/>
   </>
  )
}
