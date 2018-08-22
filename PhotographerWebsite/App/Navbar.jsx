import React, { Component } from 'react';

export default class Menu extends Component { 
  render() { 
    var menu = this.props.menu.map(x => <div key={x.id} onClick={this.toPage} className="col-xs-3 menu-point">{x.name}</div>);
    return (
      <div>
        <div className="title">
          <h1 className="h1">
            <i className="fas fa-camera-retro"></i>&nbsp;{this.props.holder.firstName} <span>{this.props.holder.lastName}</span>
          </h1>
          <p>photographer</p>
        </div>
        <div className="row navbar">
          {menu}
        </div>
      </div>
    ); 
  } 

  toPage = (event) => {
    this.props.toPage(event.target.innerHTML.toString());
  }

  shouldComponentUpdate() {
    return false;
  }
} 