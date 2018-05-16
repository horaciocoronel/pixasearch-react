import React, { Component } from 'react';

export class MainImage extends Component {

  goToPage = () => {
    window.open(this.props.pixabayURL, '_blank')
  }

  render() {
    return (
      <div 
        className="main-image"
        onClick={this.goToPage.bind(this)}
        style={{backgroundImage: `url(${this.props.imageUrl})`}}
        >
      </div>
    )
  }
}

export default MainImage;
