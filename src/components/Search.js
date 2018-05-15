import React, { Component } from 'react';
import logo from '../assets/camera.svg';
import menuIcon from '../assets/menu-icon.svg';

export class Search extends Component {
  render() {
    return (
      <div className="search">
      <div className="left">
        <img src={logo} alt="logo"
        /><span> PixaSearch</span>
      </div>
      <div className="right">
        <input type="text" placeholder="Search image" />
        <img src={menuIcon} alt="menu-icon" onClick={this.props.toggleAbout} />
      </div>
      </div>
    )
  }
}

export default Search;
