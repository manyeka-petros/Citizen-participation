import React from 'react'
import './Youth.css'
import img1 from './Assert/img1.jpg'
import img2 from './Assert/img2.jpg'
import img3 from './Assert/img3.jpg'
import img4 from './Assert/img4.jpg'
import img5 from './Assert/img5.jpg'

const YouthActivi = () => {
  return (
    <div className='yout'>
        <div className='container'>
          <h1 className='text-primary'>All Youth activities done</h1>
          <p className='text-primary'>you are free to come and show your skils</p>
        </div>
        <div className='image-container'>
            <img className='span-3 image-grid-row-2' src= {img1} />
            <img src= {img2} />
            <img src= {img3} />
            <img src= {img4} />
            <img src= {img5} />
        </div>

      
    </div>
  )
}

export default YouthActivi
