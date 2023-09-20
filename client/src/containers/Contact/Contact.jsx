import React from 'react'
import Button from 'react-bootstrap/Button'
// import PropTypes from 'prop-types'

// props
const Contact = () => {
  return (
    <>
    <div className="container">
      <div className="row" style={{textAlign: "center"}}>
      <div className="">Contact</div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
 
      </div>  
      <Button className="container" style={{border: "15px solid", width: "auto", display: "flex", justifyContent: "center"}}>Send</Button>
    </div>
    </>
  )
}

// Contact.propTypes = {}

export default Contact