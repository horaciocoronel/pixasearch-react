import React, { Component } from 'react'

export class Thumbnails extends Component {

  onImageMouseOver = (e) => {
    this.props.setCurrentImage(this.props.location)
  }
  goToPage = () => {
    window.open(this.props.pixabayURL, '_blank')
  }

  render() {
    return (
        <div className="thumbnail"
        onClick={this.goToPage}
        onMouseOver={this.onImageMouseOver}
        style={{backgroundImage: `url(${this.props.thumbUrl})`}}>
        </div> 
    )
  }
}

export default Thumbnails
