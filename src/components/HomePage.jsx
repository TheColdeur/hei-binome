import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className='home-page'>
      <div className="page-1">
        <h1 className="title">Haute Ecole d'Informatique</h1>
        <p className='description'>Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.</p>
        <div className="home-page-btn">
          <button className='subscription-btn'>Inscrivez-vous ici</button>
          <button className='schedule-btn'>Emploi du temps</button>
          <button className='program-btn'>Programme pédagogique</button>
        </div>
        <p className='arrete'>Habilitation MESupREs, suivant l'arrêté n°31309/2023</p>
      </div>
    </div>
  )
}

export default HomePage
