import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    
    state = {
        showDescription: false
    }

    renderDescription = () => {
        console.log('clicked pic', this.state.showDescription);
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
                <p onClick={this.renderDescription}>{this.props.image.description}</p>
            }
            
            <button className='like'>LIKE</button>
           </div>
        )
    }
}

export default GalleryItem;