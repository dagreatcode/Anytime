import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="jumbotron" style={{textAlign: "center"}}>
      <div className="container">
        <div className="row">
          <h1 class="display-4">Junk Removal & Hauling Services</h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1 className="my-4">
            Our Services
          </h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1 className="my-4">How It Works.</h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1 className="lead">Local To You In Atlanta</h1>
        </div>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default Home;
