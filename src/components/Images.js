import React, { Component } from 'react';
import Thumbnails from './Thumbnails';

export class Images extends Component {
  
  listAllImages = () => {
    let images = this.props.images;
    let imagesList = images.map((image, index) => {
      return(
        <Thumbnails 
          thumbUrl={image.previewURL} 
          key={image.id}
          setCurrentImage={this.props.setCurrentImage}
          location={index}
        />        
      )
    })
    return imagesList;
  }
  

  render() {
    return (
      <div className="thumbnails-list">
        {this.listAllImages()}
      </div>
    )
  }
}

export default Images
