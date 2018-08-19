import React, { Component } from 'react';

export default class Content extends Component { 
  render() { 
    var text = this.props.text; 
    var i = 0;
    //if (this.props.request !== 'home') {
    //}
    return (
      <div className="col-sm-4">
        <h1 className="h1">About</h1>
        <p className="first-p">{text[i].title}</p>
        <p>{text[i].text}</p>
      </div>
    ); //на каждый тип страницы будет импортироваться определенный класс из папки 
  } 
} 