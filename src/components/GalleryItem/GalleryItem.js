import React, { Component } from 'react';

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
           <>
            {this.state.showDescription === false ?
                <img onClick={this.renderDescription} key={this.props.image.id} src={this.props.image.path} alt={this.props.image.description} width="100" height="100"/>
                :
                <p onClick={this.renderDescription}>{this.props.image.description}</p>
            }
            
            <button>LIKE</button>
           </> 
        )
    }
}

export default GalleryItem;