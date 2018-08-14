import React, { Component } from 'react';
import Text from './Text';
import Pictures from './Pictures';
import Social from './Social';

export default class Content extends Component {
  render() {
    return (
      <div>
        <ContentManager request={this.props.request} pictures={this.props.data.pictures} text={this.props.data.text} openPUW={this.props.openPUW}/>
      </div>
    );
  }
}

function ContentManager(props) {
  var content = [];
  if (props.request === 'home') {
    content[0] = (<Text key={0} request={props.request} text={props.text} />);
    content[1] = (<Pictures key={1} pictures={props.pictures} count={props.pictures.length / 2} openPUW={props.openPUW} />);
  }
  else if (props.request === 'album') {
    content[0] = (<Pictures key={1} pictures={props.pictures} count={props.pictures.length} openPUW={props.openPUW} />);
  }
  else if (props.request === 'price') {
    content[0] = 'Price';
  }
  else if (props.request === 'contacts') {
    content[0] = 'Contacts';
  }
  return (
    <div>
      {content}
      <Social />
    </div>
  );
}