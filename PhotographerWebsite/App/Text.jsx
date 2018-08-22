import React, { Component } from 'react';

export default class Content extends Component { 
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