import React, { Component } from 'react';

export default class Price extends Component {
  render() {
    var price = this.props.price.point.map(
      x => <p key={x.id}><div className="col-xs-10">{x.about}</div><div className="col-xs-2">{x.price}</div></p>
    );
    return (
      <div className="col-sm-offset-1 col-sm-10">
        <h1 className="h1">Price</h1>
        <p className="first-p">{this.props.price.about}</p>
        <div>
          {price}
        </div>
      </div>
    );
  }
}