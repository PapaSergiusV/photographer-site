import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import PopUpWindow from './PopUpWindow';

var data = {
  holder : {
    firstName: 'John',
    lastName: 'Smith',
    vk: 'https://vk.com',
    instagram: 'https://instagram.com',
    any: '',
    phone: '8-999-888-77-66'
  },
  menu: [
    {id: 1, name: 'home'},
    {id: 2, name: 'album'},
    {id: 3, name: 'price'},
    {id: 4, name: 'contacts'}
  ],
  pictures: [
    {id: 1, path: 'https://i.ytimg.com/vi/nGg-qjn5R2I/maxresdefault.jpg'},
    {id: 2, path: 'https://i.ytimg.com/vi/iPjhRDHbLt8/maxresdefault.jpg'},
    {id: 3, path: 'https://images.wallpaperscraft.ru/image/chekhiya_staryj_gorod_zdaniya_vid_sverkhu_109566_1920x1080.jpg'},
    {id: 4, path: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'},
    {id: 5, path: 'https://cdn.fishki.net/upload/post/2017/12/01/2445298/1-00.jpg'},
    {id: 6, path: 'http://www.1366x768.ru/city/10/city-by-the-sea-wallpaper-1366x768.jpg'},
    {id: 7, path: 'http://placehold.it/640x480'},
    {id: 8, path: 'http://placehold.it/640x480'},
    {id: 9, path: 'http://placehold.it/640x480'},
    {id: 10, path: 'http://placehold.it/640x480'},
    {id: 11, path: 'http://placehold.it/640x480'},
    {id: 16, path: 'http://placehold.it/640x480'}
  ],
  text: [
    {
      id: 'home', 
      title: 'Photographer, designer and ...', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugiat incidunt minus doloremque deserunt tempora atque, odio corrupti dolor dolore deleniti odit labore officiis aperiam quasi. Fuga accusantium, rerum exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iste reprehenderit beatae in quasi sapiente, ipsam mollitia modi omnis labore placeat cupiditate quod, vel velit accusantium consectetur neque.'
    }
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
        <Navbar menu={data.menu} toPage={this.toPage} holder={data.holder} /> 
        <Content request={this.state.page} data={data} openPUW={this.openPUW} />
        <Footer /> 
      </div> 
    );
  } 
  toPage(page) {
    if (page !== this.state.page)
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
