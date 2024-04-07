import React from 'react'
import './HomeCategories.css'
import img1 from '../../Assets/Images/1.png'
import img2 from '../../Assets/Images/2.png'
import img3 from '../../Assets/Images/3.png'
import img4 from '../../Assets/Images/4.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>
            Hospital Beds at your doorstep
          </h1>
          <p> Shop Hospital Beds now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>
            Wheel Chairs at your doorstep
          </h1>
          <p> Shop Wheel Chairs now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
            ECG at your doorstep
          </h1>
          <p> Shop ECG Machines now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
            Oxygen Cylinder at your doorstep
          </h1>
          <p> Shop Oxygen Cyliner now</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories