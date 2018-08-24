import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component { 
    static propTypes = {
        toPage: PropTypes.func,
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ).isRequired,
        holder: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired
        }).isRequired
    }

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