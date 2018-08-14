import React, { Component } from 'react';

export default class Menu extends Component { 
  constructor(props) {
    super(props);
    this.toPage = this.toPage.bind(this);
  }
  render() { 
    var menu = this.props.menu.map(x => <li key={x.id} onClick={this.toPage} className="menu-point">{x.name}</li>); 
    return (
        <div className="row navbar">
          <div className="col-sm-3 col-sm-offset-1">
            <h2 className="h2">Website name</h2>
          </div>
          <div className="col-sm-7 menu">
            <ul>
              {menu}
            </ul>
          </div>
        </div>
    ); 
  } 
  toPage(event) {
    this.props.toPage(event.target.innerHTML.toString());
  }
} 