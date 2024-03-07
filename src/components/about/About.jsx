import React from 'react'
import 'animate.css'
import './about.css'
import Coverflow from './Coverflow'
// import Coverflow from './Coverflow'

function About() {
  return (
    <div className='about'>
        {/* <div className="texto">
          <p className=''>Somos una empresa dedicada a darles segundas oportunidades a las prendas que tengas abandonadas en tu casa.
          <br />
          Quizas alguien mas necesite o busque eso que ya dejaste de usar.
          <br />
          Contactate con nosotros, evaluaremos el estado de tu prenda, acordararemos el destino que quieras darle (venta o danacion) y nosotros lo publicaremos.</p>
        </div>
        <div className="carrusel">
          <Coverflow />
        </div> */}
        <Coverflow />
    </div>
  )
}

export default About