import React, { Component } from 'react';

export default class Price extends Component {
  render() {
      var price = this.props.price.map(
          x => <div><p key={x.id}><div className="col-xs-10">{x.about}</div><div className="col-xs-2">{x.price}</div></p></div>
    );
    return (
      <div className="col-sm-offset-1 col-sm-10">
        <h1 className="h1">Price</h1>
        <p className="first-p">Text for example</p>
        {price}
      </div>
    );
  }
}