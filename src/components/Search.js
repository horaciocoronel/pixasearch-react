import React, { Component } from 'react';
import logo from '../assets/camera.svg';

export class Search extends Component {
  render() {
    return (
      <div className="search">
      <div className="left">
        <img src={logo}
        /><span> PixaSearch</span>
      </div>
      <div className="right">
        <input type="text" placeholder="Search image" />
      </div>
      </div>
    )
  }
}

export default Search;
