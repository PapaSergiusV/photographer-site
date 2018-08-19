import React, { Component } from 'react';
import Text from './Text';
import Pictures from './Pictures';
import Social from './Social';
import Animation from './Animation';
import Contacts from './Contacts';

export default class Content extends Component {
  render() {
    return (
      <div ref="content">
        <ContentManager 
          request={this.props.request} 
          pictures={this.props.data.pictures} 
          text={this.props.data.text} 
          openPUW={this.props.openPUW}
          holder={this.props.holder}
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
        <Pictures request={props.request} pictures={props.pictures} count={6} openPUW={props.openPUW} />
      </div>);
    content[1] = (<Text key={1} request={props.request} text={props.text} />);
  }
  else if (props.request === 'album') {
    content[0] = (
      <div key={0} className="col-xs-12">
        <Pictures request={props.request} pictures={props.pictures} count={props.pictures.length} openPUW={props.openPUW} />
      </div>);
  }
  else if (props.request === 'price') {
    content[0] = 'Price';
  }
  else if (props.request === 'contacts') {
    content[0] = <Contacts key={0} holder={props.holder} />;
  }
  return (
    <div className="row content">
      {content}
    </div>
  );
}