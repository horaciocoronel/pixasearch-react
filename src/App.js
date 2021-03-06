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
      pixabayURL: images.hits[14].pageURL,
      height: 0,
      query: ''
    }
    this.getImages = this.getImages.bind(this);
  }

  toggleAbout = () => {
    const { height } = this.state;
    this.setState({
      height: height === 0 ? 130 : 0,
    });
  }

  getQuery = (e) => {
    let searchValue = encodeURIComponent(e.target.value);
	  if (searchValue !== '' && searchValue.length >= 2) {
     this.setState({ query: searchValue });
     this.getImages(searchValue);
    }
  }
  

  setCurrentImage = (e) => {
    this.setState({
      currentImage: this.state.images[`${e}`].largeImageURL,
      pixabayURL: this.state.images[`${e}`].pageURL
    })
  }
  
  
  getImages = (query) => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${query}`;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        // If the result is equal to 20 set the state
        if (result.hits.length > 0) {
          this.setState({
            images: result.hits
          });
        }
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
        <Search toggleAbout={this.toggleAbout} getQuery={this.getQuery}/>
        <MainImage 
          imageUrl={this.state.currentImage} 
          pixabayURL={this.state.pixabayURL}
        />
        <Images 
          images={this.state.images} 
          setCurrentImage={this.setCurrentImage}
        />
        <AnimateHeight
          duration={ 500 }
          style={{position: 'absolute', top: '84px'}}
          className='about'
          contentClassName='about-content'
          height={ height }
          animateOpacity={true}
        >
          <About/>
        </AnimateHeight>
      </div>
    );
  }
}

export default App;
