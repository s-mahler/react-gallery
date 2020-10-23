import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    imagesArray: []
  }

  componentDidMount = () => {
    console.log('app.js is mounted');
    this.getImages();
  }

  getImages = () => {
    console.log('in GET');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      this.setState({
        imagesArray: response.data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <h3>Click an image for it's description.</h3>
        <h4>Click it again to go back!</h4>
        <GalleryList imagesArray={this.state.imagesArray} getImages={this.getImages}/>
      </div>
    );
  }
}

export default App;
