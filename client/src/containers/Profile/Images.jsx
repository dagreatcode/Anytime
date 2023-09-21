import React from 'react'
import Img1 from './Front.jpg'
import Img2 from './Back.jpg'

const Images = () => {
  return (
   <>
      <img src={Img1} alt="Services1" style={{width: "100%"}} />
      <img src={Img2} alt="Services2" style={{width: "100%"}} />
      <br/>
      <br/>
      <br/>
   </>
  )
}

export default Images