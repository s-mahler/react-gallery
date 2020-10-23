import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <>
                {this.props.imagesArray.map((image) => {
                     return  <GalleryItem image={image}/>   
                 })}
                
            </>
        )
    }
}

export default GalleryList;