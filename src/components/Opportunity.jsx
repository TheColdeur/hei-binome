import React from 'react'
import './Opportunity.css'
import page2 from '../assets/page2.webp'

const Opportunity = () => {
  return (
    <div className='opportunity'>
        <div className="opportunity-description">        
            <h1 className='title'>Quelques débouchés</h1>
            <p>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…</p>
            <p>Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…</p>
        </div>
        <div className="img">
            <img src={page2} alt="" />
        </div>
    </div>
  )
}

export default Opportunity
