import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function moqua() {
  let present = document.getElementById("present");
  present.classList.toggle("open");
}

export default class Home extends Component {
  render() {
  
    var gift_image_url = 'https://imgur.com/AD2QiBK.png';

    return (
      <section className="above-fold">
        <div className="wrap-present">
          <div className="present-box" id="present" onClick={() => moqua()}>
            <div className="present">
              <div className="img-wrap" id="present-image">
                 <Link to='/gift'>
                  <img src={gift_image_url} alt="Happy birthday" height="100" width="100" />
                </Link>
              </div>
            </div>
            <div className="side front" />
            <div className="side back" />
            <div className="side left" />
            <div className="side right" />
            <div className="side top">
              <span className="to">
                <span className="name" id="nametag">Thư nhá :></span>
              </span>
            </div>
            <div className="side bottom" />
          </div>
        </div>
        <p className="info-text">Quà nha quà nha :3 !! Ấn vào để mở nha :3</p>
      </section>

    );
  }
}
