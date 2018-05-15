import React, { Component } from 'react';

export class MainImage extends Component {
  render() {
    return (
      <div 
        className="main-image"
        style={{backgroundImage: `url(${this.props.imageUrl})`}}
        >
      </div>
    )
  }
}

export default MainImage;
