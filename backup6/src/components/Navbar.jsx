//  import React ,{Component} from "react"
import {Link}from 'react-router-dom';


function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">LOGO </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li> <Link to="/home" className="nav-link">Home</Link></li>
            <li> <Link to="/about"   className="nav-link">About</Link></li>
            <li> <Link to="/services" className="nav-link">Services</Link></li>
            <li> <Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
    
        </div>
    
      </nav>
    )
  
}
export default Navbar


