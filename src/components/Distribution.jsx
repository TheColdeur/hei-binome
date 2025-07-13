import React from 'react'
import './Distribution.css'
import group1 from '../assets/Mask-group-1.webp'
import group2 from '../assets/Mask-group-2.webp'
import group3 from '../assets/Mask-group-3.webp'

const Distribution = () => {
  return (
    <div className='distribution'>
      <div className="distribution-percentage">
        <div className="distribution-card">
            <h1>25%</h1>
            <p>Apprentissage théoriques en présentiel</p>
        </div>
        <div className="distribution-card">
            <h1>25%</h1>
            <p>Apprentissage sur supports numériques</p>
        </div>
        <div className="distribution-card">
            <h1>25%</h1>
            <p>Travaux individuels de l'étudiant</p>
        </div>
        <div className="distribution-card">
            <h1>25%</h1>
            <p>Apprentissage en entreprise</p>
        </div>
      </div>
      <div className="img">
        <img src={group1} alt="" />
        <img src={group2} alt="" />
        <img src={group3} alt="" />
      </div>
    </div>
  )
}

export default Distribution
