import axios from 'axios';
import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    
    // Initially do not want to show description, state is false
    // Not sure why I inherently went for the 'false' condition, but either would work
    state = {
        showDescription: false,
    }

    // Toggles the state of true/false on a click of the image/description
    renderDescription = () => {
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    // Put route to modify a specific image
    // imageId comes from the onClick in the "LIKE" button
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
            // This caused the warning to not reuse keys to pop up, but I'm not versed in React enough to confidently solve it.
            // I gave the main div a unique key, but that wasn't enough
            // It all still works (for now), so I let it be
           <div className='item' key={this.props.image.id}>

                {/* Conditional rendering for picture vs description on click */}
                {this.state.showDescription === false ?
                    <img className='image' onClick={this.renderDescription} src={this.props.image.path} alt={this.props.image.description}/>
                    :
                    <p className='description' onClick={this.renderDescription}>{this.props.image.description}</p>
                }
                
                {/* Button with an onClick event that sends a parameter to likePic */}
                <button onClick={() => this.likePic(this.props.image.id)} className='like'>LIKE</button>
                
                {/* Conditional rendering for singular vs plural */}
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