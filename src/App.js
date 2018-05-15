import React, { Component } from 'react';
import Search from './components/Search';
import MainImage from './components/MainImage';
import Images from './components/Images';
import {images} from './LocalData';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images.hits,
      currentImage: images.hits[14].largeImageURL
    }
    this.getImages = this.getImages.bind(this);
    // this.setCurrentImage = this.setCurrentImage.bind(this);
  }
  componentDidMount() {
    if(this.state.images.keys === null) {
      console.log('Im here');
      this.getImages();
    }
  }

  setCurrentImage = (e) => {
    this.setState({currentImage: images.hits[`${e}`].largeImageURL})
  }
  
  
  getImages = (query) => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${query}`;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          images: result.hits
        });
      },
      (error) => {
        alert("Couldn't reach the API server")
      }
    )
  }

  render() {
    return (
      <div className="container">
        <Search />
        {console.log(this.state.currentImage)}
        <MainImage imageUrl={this.state.currentImage} />
        <Images images={this.state.images} setCurrentImage={this.setCurrentImage}/>
      </div>
    );
  }
}

export default App;
