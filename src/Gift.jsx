
import React, { Component } from 'react';
import './App.css';
import Preloader from './Preloader'

export default class Gift extends Component {
  render() {
    return (
      <>
        <Preloader visible />
        <div className='imgchristmas'>
          <img src="https://i.imgur.com/V5ypcfF.png" alt="Merry Christmas!" width="60%" height="60%" />
        </div>
      </>
    );
  }
}