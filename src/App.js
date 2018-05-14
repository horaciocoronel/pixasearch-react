import React, { Component } from 'react';
import Search from './components/Search';
import MainImage from './components/MainImage';
import Thumbnails from './components/Thumbnails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <MainImage />
        <Thumbnails />
      </div>
    );
  }
}

export default App;
