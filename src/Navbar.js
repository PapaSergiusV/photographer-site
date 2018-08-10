import React, { Component } from 'react';

export default class Menu extends Component { 
  render() { 
    var menu = this.props.menu.map(x => <li key={x.id} className="menu-point"><a href="#">{x.name}</a></li>);  // ADD KEY !!!!!!!
    return (
        <div className="row navbar">
          <div className="col-sm-3 col-sm-offset-1">
            <h2 className="h2">Photographer site</h2>
          </div>
          <div className="col-sm-7 menu">
            <ul>
              {menu}
            </ul>
          </div>
        </div>
    ); 
  } 
} 