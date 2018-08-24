import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HomeText extends Component {
    static propTypes = {
        text: PropTypes.shape({
            title: PropTypes.string,
            text: PropTypes.string
        }).isRequired
    }

    render() { 
        var text = this.props.text; 
        return (
            <div className="col-sm-4">
                <h1 className="h1">About</h1>
                <p className="first-p">{text.title}</p>
                <p>{text.text}</p>
            </div>
        ); 
    } 
} 