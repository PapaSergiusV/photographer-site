import React, { Component } from 'react';

export default class Menu extends Component { 
  render() { 
    return (
        <div className="row navbar">
          <div className="col-sm-3 col-sm-offset-1">
            <h2 className="h2">Photographer site</h2>
          </div>
          <div className="col-sm-7 menu">
            <ul>
              <li className="menu-point"><a href="#">Home</a></li>
              <li className="menu-point"><a href="#">Price</a></li>
              <li className="menu-point"><a href="#">Album</a></li>
              <li className="menu-point last-point"><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>
    ); 
  } 
} 