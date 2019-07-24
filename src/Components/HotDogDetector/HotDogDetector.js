import React, { Component } from 'react';
import './HotDogDetector.css';

class HotDogDetector extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isHotDog: false,
            imageAddress: ""
        }
    }
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        

    }

    handleChange = (evt) => {
        this.setState({ imageAddress: evt.target.value });
    }
    render() {
        return (
            <div className="HotDogDetector">
                <form onSubmit={this.handleSubmit}>
                    <input id="imageAddress" type="text" value={this.state.imageAddress} onChange={this.handleChange}/>
                    <button type="submit">Check if hot dog</button>
                </form>
            </div>
        );
    }
}

export default HotDogDetector;