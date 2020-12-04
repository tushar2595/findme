import React, { Component } from 'react';
import Header from "../components/layout/Header";
import Map from '../components/map/index';
import Listing from "../components/Listing";
import Footer from "../components/layout/Footer";
import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={"map-container"}>
          <Map />
          <Listing />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;