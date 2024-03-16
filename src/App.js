import {Link,BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact  from './components/Contact'
import User from './httpex/User'
function App(){
  return <div>
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Logo</Link>
        <div  className="ml-auto">
            <ul className="navbar-nav">
                <li> <Link to="/index" className="nav-link">Home</Link></li>
                <li> <Link to="/about" className="nav-link">About</Link></li>
                <li> <Link to="/services" className="nav-link">Services</Link></li>
                <li> <Link to="/contact" className="nav-link">Contact</Link></li>
                <li><Link to="/users"className="nav-link">Users</Link></li>
            </ul>
        </div>
      </nav>
      <Routes>
      <Route path="/index"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/services"  element={<Services/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/users"  element={<User/>}/>

      </Routes>
    </BrowserRouter>
  </div>
}

export default App 

