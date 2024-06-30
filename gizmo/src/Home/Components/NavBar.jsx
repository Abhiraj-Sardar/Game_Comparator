import React from 'react'
import "../Css/NavBar.css";
import logodark2 from "../../Assets/img/logodark2.png";
const NavBar = () => {
  return (
    <div className='container-fluid nav-container'>
      <img src={logodark2} alt="Logo"/>
        <nav>
          <ul>
            <li>Home</li>
            <li>Games</li>
            <li>Deals</li>
            <li>Stores</li>
          </ul>
        </nav>
        <div className='btn btn-primary'>Get Started</div>
    </div>
  )
}

export default NavBar
