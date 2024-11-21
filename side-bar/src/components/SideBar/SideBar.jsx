import './SideBar.css';
import { useState } from 'react';
import { SideBarData } from './sideBarData.jsx';


const SideBar = () => {

       const [isOpen, setIsOpen] = useState(true);

       function toggleSideBar() {
              setIsOpen(!isOpen);
       }

       return (
              <div className={`side-bar ${isOpen ? 'open' : 'closed'}`}>
                     <div className='side-bar-header'>
                            <button className='toggle-btn' onClick={toggleSideBar}>
                                   <div className={`arrow-btn ${isOpen ? 'left' : 'right'}`}></div>
                            </button>
                            <div className='logo'>
                                   <h2>{isOpen ? 'Side Bar' : ''}</h2>
                            </div>
                     </div >
                     <nav className='nav-menu'>
                            <ul>
                                   {SideBarData?.map((item, index) => (
                                          <li key={index}>
                                                 <a href={item.path}>
                                                        {isOpen ? item.icon : ""}
                                                        {isOpen ? item.title : ""}
                                                 </a>
                                          </li>
                                   ))}
                            </ul>
                     </nav>
              </div >
       )
}

export default SideBar