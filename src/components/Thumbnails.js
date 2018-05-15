import React, { Component } from 'react'

export class Thumbnails extends Component {

  onImageClick = (e) => {
    // console.log(this.props.location);
    this.props.setCurrentImage(this.props.location)
  }
  

  render() {
    return (
      
        <div className="thumbnail"
        onClick={this.onImageClick}
        // location={this.props.location}
        onMouseOver={this.onImageClick}
        style={{backgroundImage: `url(${this.props.thumbUrl})`}}>
        </div> 
    )
  }
}

export default Thumbnails
