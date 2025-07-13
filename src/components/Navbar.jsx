import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src ={logo} alt = ""/>
      <ul>
          <li>
            <a href="">ACCEUIL</a>
          </li>
          <li>
            <a href="">ACTUALITES</a>
          </li>
          <li>
            <a href="">BOURSE D'ETUDES</a>
          </li>
          <li>
            <a href="">INSCRIPTION</a>
          </li>
          <button>INTRANET</button>
      </ul>
    </div>
  )
}

export default Navbar
