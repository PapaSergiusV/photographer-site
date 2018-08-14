import React, { Component } from 'react';

export default class Pictures extends Component {
  render() {
    var pictures = [];
    for (var i = 0; i < this.props.count / 2; i++) {
      var up = (
        <div className="picture">
          <img alt="фото альбома" src={this.props.pictures[i * 2].path} id={'pic' + (i * 2)} />
        </div>
      );
      var down = (
        <div className="picture">
          <img alt="фото альбома" src={this.props.pictures[i * 2 + 1].path} id={'pic' + (i * 2 + 1)} />
        </div>
      );
      pictures[i] = (
        <div key={this.props.pictures[i].id} className="col-md-3 col-sm-4 col-xs-6 noMarg">
          {up}
          {down}
        </div>
      );
    }
    return(
      <div className="row pictures" onClick={this.props.openPUW}>
        {pictures}
      </div>
    );
  }
}