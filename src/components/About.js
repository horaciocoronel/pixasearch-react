import React, { Component } from 'react';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';

export class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-content">
          <div className="about-top">
            <p>
              PixaSearch is an image search app built in React and powered by Pixabay API.
            </p>
          </div>
          <div className="about-bottom">
            <span style={{fontWeight: '300'}}>Built by</span> <span>Horacio Coronel</span>
            <p>
              <a href="https://github.com/horaciocoronel" target="_blank" rel="noopener noreferrer" title="Horacio Coronel Github">
              <img src={Github} alt="Github Logo"/></a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/horacio-coronel/" target="_blank" rel="noopener noreferrer" title="Horacio Coronel Linkedin">
              <img src={Linkedin} alt="Linkedin Logo"/></a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
