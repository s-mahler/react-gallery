import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <>
                {this.props.imagesArray.map((image) => {
                     return  <img key={image.id} src={image.path} alt={image.description} width="100" height="100"/>   
                 })}
                <GalleryItem/>
            </>
        )
    }
}

export default GalleryList;