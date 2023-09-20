import Img from "./new.png"

const Banner = () => {
  return (
   <>
    <div className="">
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <img src={Img} alt="anytime" style={{ width: "100%"}}/>
      </div>
    </div>
   </>
  )
}

export default Banner