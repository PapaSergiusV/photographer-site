import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import PopUpWindow from './PopUpWindow';

var data = {
  menu: [
    {id: 1, name: 'home'},
    {id: 2, name: 'album'},
    {id: 3, name: 'price'},
    {id: 4, name: 'contacts'}
  ],
  pictures: [
    {id: 1, path: 'http://placehold.it/320x320'},
    {id: 2, path: 'http://placehold.it/300x320'},
    {id: 3, path: 'http://placehold.it/320x320'},
    {id: 4, path: 'http://placehold.it/300x320'},
    {id: 5, path: 'http://placehold.it/320x320'},
    {id: 6, path: 'http://placehold.it/300x320'},
    {id: 7, path: 'http://placehold.it/320x320'},
    {id: 8, path: 'http://placehold.it/300x320'},
    {id: 9, path: 'http://placehold.it/320x320'},
    {id: 10, path: 'http://placehold.it/320x320'},
    {id: 11, path: 'http://placehold.it/320x320'},
    {id: 12, path: 'http://placehold.it/320x320'},
    {id: 13, path: 'http://placehold.it/320x320'},
    {id: 14, path: 'http://placehold.it/320x320'},
    {id: 15, path: 'http://placehold.it/320x320'},
    {id: 16, path: 'http://placehold.it/320x320'}
  ],
  text: [
    {id: 1, title: 'Text for example', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit exercitationem vero esse corporis pariatur tempora, ullam illo ipsumto, explicabo delectus, eos officia quibusdam voluptatum adipisci sint veritatis molestias quisquam repudiandae?'}
  ]
}

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { page: 'home', PUWIsOpen: false, PUWPicId: 0 }; 
    this.toPage = this.toPage.bind(this);
    this.closePUW = this.closePUW.bind(this);
    this.openPUW = this.openPUW.bind(this);
  } 
  render() { 
    return ( 
      <div className="container-fluid"> 
        {this.state.PUWIsOpen ? <PopUpWindow close={this.closePUW} pictures={data.pictures} id={this.state.PUWPicId} /> : null }
        <Navbar menu={data.menu} toPage={this.toPage} /> 
        <Content request={this.state.page} data={data} openPUW={this.openPUW} />
        <Footer /> 
      </div> 
    ); // Menu - передать функцию для изменения содержимого контекста, Content - передать значение, что открывать 
  } 
  toPage(page) {
    this.setState({ page: page });
  }
  closePUW() {
    this.setState({ PUWIsOpen: false });
  }
  openPUW(event) {
    var id = parseInt(event.nativeEvent.toElement.id.toString().match(/(\d+)/i)[0], 10);
    this.setState({ PUWIsOpen: true, PUWPicId: id });
  }
} 

export default App;
