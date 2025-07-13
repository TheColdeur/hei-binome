import React from 'react'
import './Language.css'
import java from '../assets/java.png'
import python from '../assets/python.png'
import js from '../assets/JS.png'
import C from '../assets/C.png'
import TS from '../assets/TS.png'
import docker from '../assets/docker.png'
import next from '../assets/next.png'
import aws from '../assets/aws.png'
import serverless from '../assets/serverless.png'
import react from '../assets/react.png'
import openapi from '../assets/openapi.png'

const Language = () => {
  return (
    <div className='language'>
      <h1 className='language-title'>Les technos et langages utilisées</h1>
      <p>Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.</p>
      <div className="img-row-1">
        <img src={java} alt="" />
        <img src={python} alt="" />
        <img src={js} alt="" />
        <img src={C} alt="" />
        <img src={TS} alt="" />
      </div>
      <div className="img-row-2">
        <img src={docker} alt="" />
        <img className='next' src={next} alt="" />
        <img className='aws' src={aws} alt="" />
        <img src={serverless} alt="" />
        <img src={react} alt="" />
        <img src={openapi} alt="" />
      </div>
    </div>
  )
}

export default Language
