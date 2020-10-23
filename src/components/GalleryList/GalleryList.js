import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <>
                {/* Map the array to display on page */}
                {/* Each image and the axios GET function sent as props */}
                {this.props.imagesArray.map((image) => {
                     return  <GalleryItem image={image} getImages={this.props.getImages}/>   
                 })}
                
            </>
        )
    }
}

export default GalleryList;