import React, { Component } from 'react';
import Pictures from './Pictures';

export default class Content extends Component { 
  render() { 
    var request = this.props.request; 
    console.log(request); 
    return (
      <div className="row content">
        <div className="col-sm-offset-1 col-sm-7">
          <div className="central-text">
            <div>
              <h1 className="h1">{request}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit exercitationem vero esse corporis pariatur tempora, ullam illo ipsumto, explicabo delectus, eos officia quibusdam voluptatum adipisci sint veritatis molestias quisquam repudiandae?</p>
            </div>
          </div>
        </div>
      </div>
    ); //на каждый тип страницы будет импортироваться определенный класс из папки 
  } 
} 