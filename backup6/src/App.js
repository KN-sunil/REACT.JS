/* import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact  from './components/Contact'
function App(){
  return <div>
    <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Logo</Link>
        <div  className="ml-auto">
            <ul className="navbar-nav">
                <li> <Link to="/index" className="nav-link">Home</Link></li>
                <li> <Link to="/about" className="nav-link">About</Link></li>
                <li> <Link to="/services" className="nav-link">Service</Link></li>
                <li> <Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </div>
      </nav>
      <Routes>
      <Route path="/index"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/services"  element={<Services/>}/>
      <Route path="/contact"  element={<Contact/>}/>

      </Routes>
    </Router>
  </div>
}

export default App */


import  {Link,BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from "../src/components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Services from "./components/Services"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"



function App(){
  return (<div>
   
        <Router>
        <Navbar />
          <Switch>
          {/* /<Route exact path="/" component={Navbar}/> */}
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/contact"  component={Contact}/>
            <Route exact path="/*"  render={()=> <Redirect to="/home"/>} />

          </Switch>
        </Router>
  </div> )
}
export default App