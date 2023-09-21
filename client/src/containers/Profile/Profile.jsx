import React from 'react'
import Images from './Images.jsx'

const Profile = () => {
  return (
    <>
      <div className="container jumbotron" style={{}}>
        <div className="display-4" style={{textAlign: "center", margin: "30px"}}>Portfolio</div>
        <Images style={{margin: "10%"}} />
      </div>
    </>
  )
}

export default Profile