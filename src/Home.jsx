import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function moqua() {
  let present = document.getElementById("present");
  present.classList.toggle("open");
}

export default class Home extends Component {
  render() {

    var gift_image_url = 'https://i.imgur.com/uBGqORo.png';

    return (
      <section className="above-fold">
        <div className="wrap-present">
          <div className="present-box" id="present" onClick={() => moqua()}>
            <div className="present">
              <div className="img-wrap" id="present-image">
                 <Link to='/gift'>
                  <img src={gift_image_url} alt="Merry Christmas!" height="100" width="100" />
                </Link>
              </div>
            </div>
            <div className="side front" />
            <div className="side back" />
            <div className="side left" />
            <div className="side right" />
            <div className="side top">
              <span className="to">
                <span className="name" id="nametag">Gửi bạn choẻ!</span>
              </span>
            </div>
            <div className="side bottom" />
          </div>
        </div>
        <p className="info-text">Không được chỉnh chu, nhưng cũng có món quà nhỏ, nhận cho vui hén :D!</p>
      </section>

    );
  }
}
