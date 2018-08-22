import React, { Component } from 'react';

export default class Footer extends Component { 
    render() { 
        return (
            <div className="row footer">
                2018. Created by&nbsp; <a href="http://s-ponomarev.ru"> Ponomarev S.</a>
            </div>
        ); 
    }

    shouldComponentUpdate() {
        return false;
    }
} 