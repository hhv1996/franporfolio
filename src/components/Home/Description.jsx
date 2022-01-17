import React from 'react'

const Description = ({textControl,sDescription,lDescription}) => {
    return (
        <p className='descriptionAboutMe'>{textControl?sDescription:lDescription}</p>
    )
}

export default Description
