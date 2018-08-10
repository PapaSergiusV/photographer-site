import React, { Component } from 'react';

export default class Pictures extends Component {
  render() {
    var pictures = this.props.pictures.map(x =>
        <div key={x.col} className="col-md-3 col-sm-4 col-xs-6 noMarg">
          <div className="picture">
            <img src={x.up} />
          </div>
          <div className="picture">
            <img src={x.down} />
          </div>
        </div>
      );
    return(
      <div className="row pictures">
        {pictures}
      </div>
    );
  }
}