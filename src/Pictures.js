import React, { Component } from 'react';

export default class Pictures extends Component {
  render() {
    var pictures = [];
    pictures[0] = [];
    pictures[1] = [];
    pictures[2] = [];
    for (var i = 0; i < this.props.count; i++) 
      pictures[i % 3][Math.floor(i / 3)] = <img alt="фото альбома" src={this.props.pictures[i].path} id={'pic' + i} key={i} />;
    var colls = [];
    for (var j = 0; j < 3; j++) 
      colls[j] = <div key={j} className="col-sm-4">{pictures[j]}</div>;
    return (
      <div>
        <h1 className="h1">My works</h1>
        <div className="pictures" onClick={this.props.openPUW}>
          {colls}
        </div>
      </div>
    );
  }
}