import React from 'react'
import './Field.css'
import cloud from '../assets/Cloud-et-cybersecurite_Plan-de-travail-1-300x300.png'
import logicielle from '../assets/Ingenierie-logicielle_Plan-de-travail-1-1-300x300.png'
import ia from '../assets/Intelligence-artificielle_Plan-de-travail-1-300x300.png'

const Field = () => {
  return (
    <div className='field'>
      <h1 className='title'>Domaines</h1>
      <p className='field-description'>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
      <div className="study-field">
        <div className="field-card">
            <img src={cloud} alt="" />
            <h1 className='field-card-name'>Cloud et cybersécurité</h1>
            <p className='field-card-content'>Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.</p>
        </div>
        <div className="field-card">
            <img src={ia} alt="" />
            <h1 className='field-card-name'>Intelligence artificielle</h1>
            <p className='field-card-content'>Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.</p>
        </div>
        <div className="field-card">
            <img src={logicielle} alt="" />
            <h1 className='field-card-name'>Ingénieurie logicielle</h1>
            <p className='field-card-content'>Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.</p>
        </div>
      </div>
    </div>
  )
}

export default Field
