import React from 'react'
import './AboutUs.css'
import Image1 from '../assets/image1.webp'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className="img">
        <img src={Image1} alt="" />
      </div>
      <div className="about-us-description">
        <h2 className='title'>A propos de nous</h2>
        <div className="description-content">
            <div className="year">
                <span><i class="fa-solid fa-graduation-cap"></i><h4>+3ans</h4></span>
                <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
            </div>
            <div className="student">
                <span><i class="fa-solid fa-users"></i><h4>+250 étudiants</h4></span>
                <p>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p>
            </div>
            <div className="mission">
                <span><i class="fa-solid fa-medal"></i><h4>Notre mission</h4></span>
                <p>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
