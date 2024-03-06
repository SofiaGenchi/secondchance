import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div className='navegacion'>
        <img className='logo' src="src/assets/percha.png" alt="second chance logo" width="50px"/>
        <ul>
            <li>Inicio</li>
            <li>Contacto</li>
            <li>Productos</li>
        </ul>
    </div>
  )
}

export default Nav