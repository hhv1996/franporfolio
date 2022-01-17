import React, { useState } from 'react'
  import Description from './Description'
import './Home.css'

const Home = () => {
    const [sDescription,setSDescription] = useState ("Franco gigena mejor conocido como colorme makeup en sus redes, es un cosplayer especializado en el arte de la caracterizacion con maquillaje y protesis, además de ser peluquero, manicura, diseñador de vestuario y profesor de dichas áreas y próximamente profesor de artes plásticas.")
    const [lDescription,setLDescription] = useState ("Franco gigena mejor conocido como colorme makeup en sus redes, es un cosplayer especializado en el arte de la caracterizacion con maquillaje y protesis, además de ser peluquero, manicura, diseñador de vestuario y profesor de dichas áreas y próximamente profesor de artes plásticas. La mayoría de sus personajes, con los cuales ganó concursos  son de índole femenina (crossplay) encontrando personajes como morticia addams, rita repulsa, hiedra venenosa, avatar kyoshi , ursula y muchas más!!! A los cuales siempre logra llevar al extremo no solo en detalles de makeup sino de modificación corporal para lograr la máxima excelencia y detalles de trajes.")
    const [description, setDescription] = useState ("")
    const [textControl, setTextControl] = useState (true)
    const controlText=()=>{
        if (textControl) {
            setDescription(lDescription)
            setTextControl(false)
        }else{
            setTextControl(true)
            setDescription(sDescription)
        }
    }
    return (
        <div className='homeContainer'>
            <div className='aboutMe'>
                <h3 className='greeting'>Hola, soy Franco Gigena</h3>
                <h1 className='profession'>Cosplayer. Estilista. </h1>
                <p className='descriptionAboutMe'>{description}</p>
                <button className='buttonReadMore' onClick={controlText}>{textControl?"Leer mas...":"Esconder..."}</button>

            </div>
            <div className='imgPerfilContainer'>
                <img className='imgPerfil' src="./img/perfil2.png" alt="" />
            </div>
        </div>
    )
}

export default Home
