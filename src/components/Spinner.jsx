import React, { Component } from 'react';
import loading from './giphy.gif'

class Spinner extends Component {
    render() {
        return (
            <div class="text-center">
                <img src={loading} alt="loading"  />
            </div>
        );
    }
}

export default Spinner;