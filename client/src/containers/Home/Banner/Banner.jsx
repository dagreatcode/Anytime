import Img from "./new.png"
import './Banner.css'

const Banner = () => {
  return (
   <>
    <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <img className="hero" src={Img} alt="anytime" style={{ width: "100%"}}/>
      </div>
    </div>
   </>
  )
}

export default Banner