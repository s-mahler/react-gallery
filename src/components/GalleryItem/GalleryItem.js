import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    
    state = {
        showDescription: false
    }

    renderDescription = () => {
        this.setState({
            showDescription: !this.state.showDescription
        })
    }
    
    render() {
        return (
           <div className='item' key={this.props.image.id}>
            {this.state.showDescription === false ?
                <img className='image' onClick={this.renderDescription} src={this.props.image.path} alt={this.props.image.description}/>
                :
                <p className='description' onClick={this.renderDescription}>{this.props.image.description}</p>
            }
            
            <button className='like'>LIKE</button>
            <p>{this.props.image.likes} people like this!</p>
           </div>
        )
    }
}

export default GalleryItem;