import './NavBar.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { useState } from 'react';

function NavBar() {

       const [isMenuOpen, setIsMenuOpen] = useState(false);

       function toggleMenu() {
              setIsMenuOpen(!isMenuOpen);
       }

       return (
              <Router>
                     <>
                            <nav className="navbar">
                                   <div className="navbar-logo">Webside</div>
                                   <div className='menu' onClick={toggleMenu}>
                                          <div className='menu-icon'></div>
                                          <div className='menu-icon'></div>
                                          <div className='menu-icon'></div>
                                   </div>
                                   <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
                                          <li>
                                                 <NavLink
                                                        to="/" className={({ isActive }) => (isActive ? 'active' : '')}
                                                        onClick={toggleMenu}
                                                 >
                                                        Home
                                                 </NavLink>
                                          </li>
                                          <li>
                                                 <NavLink
                                                        to="/about" className={({ isActive }) => (isActive ? 'active' : '')}
                                                        onClick={toggleMenu}
                                                 >

                                                        About
                                                 </NavLink>
                                          </li>
                                          <li>
                                                 <NavLink
                                                        to="/services" className={({ isActive }) => (isActive ? 'active' : '')}
                                                        onClick={toggleMenu}
                                                 >
                                                        Services
                                                 </NavLink>
                                          </li>
                                          <li>
                                                 <NavLink
                                                        to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}
                                                        onClick={toggleMenu}
                                                 >
                                                        Contact
                                                 </NavLink>
                                          </li>
                                   </ul>
                            </nav>
                            <Routes>
                                   <Route path="/" element={<Home />} />
                                   <Route path="/about" element={<About />} />
                                   <Route path="/services" element={<Services />} />
                                   <Route path="/contact" element={<Contact />} />
                            </Routes>
                     </>
              </Router>
       );
}

export default NavBar;
