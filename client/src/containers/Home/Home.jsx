import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row">
          <h1>Junk Removal & Hauling Services</h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1 className>
            Our Services
          </h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1>How It Works.</h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1>Local To You In Atlanta</h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default Home;
