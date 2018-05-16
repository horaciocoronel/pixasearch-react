import React, { Component } from 'react'

export class Thumbnails extends Component {

  onImageMouseOver = (e) => {
    this.props.setCurrentImage(this.props.location)
  }


  render() {
    return (
        <div className="thumbnail"
        onClick={this.onImageMouseOver}
        onMouseOver={this.onImageMouseOver}
        style={{backgroundImage: `url(${this.props.thumbUrl})`}}>
        </div> 
    )
  }
}

export default Thumbnails
