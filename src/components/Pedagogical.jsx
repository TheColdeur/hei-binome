import React from 'react'
import './Pedagogical.css'
import mirado from '../assets/Mirado-300x300.webp'
import julien from '../assets/Julien-300x300.webp'
import ryan from '../assets/ryan-min-300x300.webp'

const Pedagogical = () => {
  return (
    <div className='pedagogical'>
      <h1 className='title'>L'équipe pédagogique</h1>
      <p className='pedagogical-description'>Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</p>
      <div className="manager">
        <div className="card">
          <img src={ryan} alt="" />
          <h4 className='name'>Ryan ANDRIAMAHERY</h4>
          <p className='status'>Développeur Back End | Cofondateur et Directeur des opérations de HEI</p>
        </div>
        <div className="card">
          <img src={julien} alt="" />
          <h4 className='name'>Julien RAJERISON</h4>
          <p className='status'>Lead Développeur | Fondateur de l'association Techzara Madagascar</p>
        </div>
        <div className="card">
          <img src={mirado} alt="" />
          <h4 className='name'>Mirado RAFENOMAHENITSOA</h4>
          <p className='status'>Data and Business Intelligence Specialist 5+</p>
        </div>
      </div>
    </div>
  )
}

export default Pedagogical
