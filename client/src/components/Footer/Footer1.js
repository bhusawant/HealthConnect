import React from 'react'
import veges from '../../Assets/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Medical Equipments at your doorstep
                </h1>
                <p>We deliver all the necessary equipments at your doorstep.
                We deliver all the necessary equipments at your doorstep.
                </p>
            </div>
        </div>
    )
}

export default Footer1