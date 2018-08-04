import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Pictures from './Pictures';
import Social from './Social';
import Footer from './Footer';

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { page: "Text. For. Example." }; 
  } 
  render() { 
    return ( 
      <div className="container-fluid"> 
        <Navbar /> 
        <Content request={this.state.page} /> 
        <Pictures />
        <Social />
        <Footer /> 
      </div> 
    ); // Menu - передать функцию для изменения содержимого контекста, Content - передать значение, что открывать 
  } 
} 

export default App;
