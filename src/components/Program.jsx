import React from 'react'
import './Program.css'
import page3 from '../assets/page3.webp'

const Program = () => {
  return (
    <div className='program'>
      <div className="img">
        <img src={page3} alt="" />
      </div>
      <div className="program-description">
        <h1 className='program-title'>Le programme pédagogique</h1>
        <p>Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.</p>
        <button>Notre Programme</button>
      </div>
    </div>
  )
}

export default Program
