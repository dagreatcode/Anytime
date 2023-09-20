import Img from "./new.png"

const Banner = () => {
  return (
   <>
    <div className="container">
      <div>Banner</div>
      {/* <image src={Img} alt ="anytime"/> */}
      <img src={Img} alt="anytime" style={{display: "flex", justifyContent: "center"}} />
    </div>
   </>
  )
}

export default Banner