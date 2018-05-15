import React, { Component } from 'react';
import Search from './components/Search';
import MainImage from './components/MainImage';
import About from './components/About';
import Images from './components/Images';
import AnimateHeight from 'react-animate-height';
import {images} from './LocalData';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images.hits,
      currentImage: images.hits[14].largeImageURL,
      showAbout: false,
      height: 0
    }
    this.getImages = this.getImages.bind(this);
    // this.setCurrentImage = this.setCurrentImage.bind(this);
  }
  componentDidMount() {
    if(this.state.images.keys === null) {
      this.getImages();
    }
  }

  toggleAbout = () => {
    // this.setState({showAbout: !this.state.showAbout})
    const { height } = this.state;
    this.setState({
      height: height === 0 ? 300 : 0,
    });
    console.log(this.state.height)
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
    const { height } = this.state;
    return (
      <div className="container">
        <Search toggleAbout={this.toggleAbout} />
        {console.log(this.state.currentImage)}
        <MainImage imageUrl={this.state.currentImage} />
        <Images images={this.state.images} setCurrentImage={this.setCurrentImage}/>
        <AnimateHeight
          duration={ 500 }
          className='about'
          height={ height } // see props documentation bellow
        >
          <About/>
        </AnimateHeight>
      </div>
    );
  }
}

export default App;
