
import React, { Component } from 'react';
import './App.css';
import Preloader from './Preloader'

export default class Gift extends Component {
  render() {
    return (
      <>
        <Preloader visible />
        <div className='imghbbd'>
          <img src="https://imgur.com/AD2QiBK.png" alt="Happy Birth Ông :D" width="60%" height="60%" />
        </div>
      </>
    );
  }
}