import React, { Component } from 'react';
import Animation from './Animation';

export default class PopUpWindow extends Component {
  constructor(props) {
    super(props);
    this.eventPUW = this.eventPUW.bind(this);
    this.state = { path: this.props.pictures[this.props.id].path, id: this.props.id };
  }
  render() {
    return (
      <div ref="PUW" className="PUWindow" onClick={this.closePUW.bind(this, this.props)}>
        <div className="PUWContainer">
          <img src={this.state.path} alt="Приближенное фото" />
          <div className="switch" onClick={this.eventPUW}>
            <div className="col-xs-3"><div className="switch-field" id="toPrev"><i className="fas fa-angle-left"></i></div></div>
            <div className="col-xs-3"></div>
            <div className="col-xs-3"></div>
            <div className="col-xs-3"><div className="switch-field" id="toNext"><i className="fas fa-angle-right"></i></div></div>
          </div>
        </div>
      </div>
    );
  }
  // The function for handle clicks on Pop-up window
  eventPUW(event) {
    var to = event.nativeEvent.toElement.id;
    var idNow = this.state.id;
    if (to === 'toNext') {
      if (idNow + 1 < this.props.pictures.length)
        this.setState({ path: this.props.pictures[idNow + 1].path, id: idNow + 1});
      else
        this.setState({ path: this.props.pictures[0].path, id: 0});
    }
    else if (to === 'toPrev') {
      if (idNow - 1 >= 0)
        this.setState({ path: this.props.pictures[idNow - 1].path, id: idNow - 1});
      else
        this.setState({ path: this.props.pictures[this.props.pictures.length - 1].path, id: this.props.pictures.length - 1});
    }
    event.stopPropagation();
  }

  componentDidMount() {
    settingSwitches(this.refs.PUW);
    Animation.openWindow(this.refs.PUW); // Pop-up window animation
  }

  componentDidUpdate() {
    settingSwitches(this.refs.PUW);
  }

  closePUW(props) {
    Animation.closeWindow(this.refs.PUW);
    setTimeout(props.close, 300);  // Вызов функции из App изменяющей состояние открытия окна в App
  }
}

function settingSwitches(PUW) {
  var container = PUW.childNodes[0];
  var img = container.childNodes[0];
  var sw = container.childNodes[1];
  var relSides = container.scrollHeight / container.scrollWidth;
  if (relSides > 1) {
    img.style.height = 'auto';
    img.style.width = 'auto';
  }
  else if (relSides > img.scrollHeight / img.scrollWidth) {
    img.style.height = 'auto';
    img.style.width = '100%';
  }
  sw.style.height = img.scrollHeight + 'px';
  sw.style.width = img.scrollWidth + 'px';
}