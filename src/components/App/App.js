import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {

  state = {
    imagesArray: []
  }

  // On successful mount, call GET function to update array
  componentDidMount = () => {
    this.getImages();
  }

  // axios GET to update array with information from server
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
        {/* Send array and GET function as props */}
        <GalleryList imagesArray={this.state.imagesArray} getImages={this.getImages}/>
        <h4>Submit your own image</h4>
        {/* This form has it framework set up, but has little functionality */}
        {/* It was left in to demonstrate making a component of a form */}
        <GalleryForm/>
      </div>
    );
  }
}

export default App;
