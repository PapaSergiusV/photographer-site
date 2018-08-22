import React, { Component } from 'react';
import Text from './Text.jsx';
import Pictures from './Pictures.jsx';
import Social from './Social.jsx';
import Animation from './Animation.jsx';
import Contacts from './Contacts.jsx';
import Price from './Price.jsx';

export default class Content extends Component {
  render() {
    return (
      <div ref="content">
        <ContentManager 
          request={this.props.request} 
          data={this.props.data} 
          openPUW={this.props.openPUW}
        />
        <Social holder={this.props.data.holder} />
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.request !== this.props.request)   // Проверка осталась на случай перестройки приложения. При релизе удалить!
      Animation.openWindow(this.refs.content, 200); // Pop-up window animation
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.request !== this.props.request;
  }
}

function ContentManager(props) {
  var content = [];

  if (props.request === 'home') {
    content[0] = (
      <div key={0} className="col-sm-offset-1 col-sm-6">
        <Pictures request={props.request} pictures={props.data.pictures} count={6} openPUW={props.openPUW} />
      </div>);
    content[1] = (<Text key={1} request={props.request} text={props.data.text} />);
  }

  else if (props.request === 'album') {
    content[0] = (
      <div key={0} className="col-xs-12">
        <Pictures request={props.request} pictures={props.data.pictures} count={props.data.pictures.length} openPUW={props.openPUW} />
      </div>);
  }

  else if (props.request === 'price') {
      content[0] = <Price key={0} price={props.data.price}/>;
  }

  else if (props.request === 'contacts') {
    content[0] = <Contacts key={0} holder={props.data.holder} />;
  }

  return (
    <div className="row content">
      {content}
    </div>
  );
}