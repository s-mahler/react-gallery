import axios from 'axios';
import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    
    state = {
        showDescription: false,
    }

    renderDescription = () => {
        this.setState({
            showDescription: !this.state.showDescription
        })
    }


    likePic = (imageId) => {
        console.log('image put', imageId);
        axios({
            method: 'PUT',
            url: `gallery/like/${imageId}`
        }).then((response) => {
            console.log(response.data);
            this.props.getImages();
        }).catch((error) => {
            console.log(error);
        });
    }
    
    render() {
        return (
           <div className='item' key={this.props.image.id}>
                {this.state.showDescription === false ?
                    <img className='image' onClick={this.renderDescription} src={this.props.image.path} alt={this.props.image.description}/>
                    :
                    <p className='description' onClick={this.renderDescription}>{this.props.image.description}</p>
                }
                
                <button onClick={() => this.likePic(this.props.image.id)} className='like'>LIKE</button>
                
                {this.props.image.likes === 1 ?
                <p>{this.props.image.likes} person likes this!</p>
                :
                <p>{this.props.image.likes} people like this!</p>
                }
           </div>
        )
    }
}

export default GalleryItem;