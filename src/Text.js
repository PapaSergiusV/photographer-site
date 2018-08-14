import React, { Component } from 'react';

export default class Content extends Component { 
  render() { 
    var text = this.props.text; 
    var i = 0;
    //if (this.props.request !== 'home') {
    //}
    return (
      <div className="row content">
        <div className="col-sm-offset-1 col-sm-7">
          <div className="central-text">
            <div>
              <h1 className="h1">{titleTransform(text[i].title)}</h1>
              <p>{text[i].text}</p>
            </div>
          </div>
        </div>
      </div>
    ); //на каждый тип страницы будет импортироваться определенный класс из папки 
  } 
} 

function titleTransform(text) {
  // Создать функцию, преобразующую заголовок в стиль Camel
  return text;
}