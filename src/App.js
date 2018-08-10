import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Pictures from './Pictures';
import Social from './Social';
import Footer from './Footer';

var menu = [
  {id: 1, name: 'home'},
  {id: 2, name: 'price'},
  {id: 3, name: 'album'},
  {id: 4, name: 'contacts'}
];

var homePictures = [
  {col: 1, up: 'http://placehold.it/320x320', down: 'http://placehold.it/320x320'},
  {col: 2, up: 'http://placehold.it/320x320', down: 'http://placehold.it/320x320'},
  {col: 3, up: 'http://placehold.it/320x320', down: 'http://placehold.it/320x320'},
  {col: 4, up: 'http://placehold.it/320x320', down: 'http://placehold.it/320x320'}
];

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { page: "Text. For. Example." }; 
  } 
  render() { 
    return ( 
      <div className="container-fluid"> 
        <Navbar menu={menu}/> 
        <Content request={this.state.page} /> 
        <Pictures pictures={homePictures}/>
        <Social />
        <Footer /> 
      </div> 
    ); // Menu - передать функцию для изменения содержимого контекста, Content - передать значение, что открывать 
  } 
} 

export default App;
