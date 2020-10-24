import React, { Component } from 'react';

class GalleryForm extends Component {
   
    state = {
        image: {
            url: 'yes',
            description: 'no'
        }
    }


    handleChange = (event) => {
        console.log('change', event.target.value);
    }
    
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={(event) => this.handleChange(event, 'url')} placeholder="Picture URL"/>
                <input onChange={(event) => this.handleChange(event, 'description')} placeholder="Description"/>
                <button>SUBMIT</button>
            </form>
        )
    }
}

export default GalleryForm;