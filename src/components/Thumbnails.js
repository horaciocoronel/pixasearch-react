import React, { Component } from 'react'

export class Thumbnails extends Component {

  onImageClick = (e) => {
    this.props.setCurrentImage(this.props.location)
  }
  

  render() {
    return (
        <div className="thumbnail"
        onClick={this.onImageClick}
        onMouseOver={this.onImageClick}
        style={{backgroundImage: `url(${this.props.thumbUrl})`}}>
        </div> 
    )
  }
}

export default Thumbnails
