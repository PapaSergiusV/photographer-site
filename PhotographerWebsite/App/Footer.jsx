import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component { 
    static propTypes = {};

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