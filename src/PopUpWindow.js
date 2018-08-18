import React, { Component } from 'react'

export default class PopUpWindow extends Component {
  constructor(props) {
    super(props);
    this.eventPUW = this.eventPUW.bind(this);
    this.state = { path: this.props.pictures[this.props.id].path, id: this.props.id };
  }
  render() {
    return (
      <div ref="PUW" className="PUWindow" onClick={this.closePUW.bind(this, this.props)}>
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-10 col-sm-offset-1 col-xs-12">
              <div className="PUWContainer" onClick={this.eventPUW}>
                <img src={this.state.path} alt="Приближенное фото" />
                <div className="row switch">
                  <div className="col-xs-3"><div className="switch-field" id="toPrev"></div></div>
                  <div className="col-xs-3"></div>
                  <div className="col-xs-3"></div>
                  <div className="col-xs-3"><div className="switch-field" id="toNext">></div></div>
                </div>
              </div>
            </div>
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
    this.openPUW(this);
  }
  // Pop-up window animation
  openPUW() {
    var elem = this.refs.PUW;
    var opacity = 0.0;
    elem.style.opacity = opacity;
    var show = setInterval(function() {
      opacity += 0.1;
      if (opacity >= 1) {
        opacity = 1;
        clearInterval(show);
      }
      elem.style.opacity = opacity;
    }, 50);
  }
  closePUW(props) {
    var elem = this.refs.PUW;
    var opacity = 1.0;
    var hide = setInterval(function() {
      opacity -= 0.1;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(hide);
        props.close();  // Вызов функции из App изменяющей состояние открытия окна в App
      }
      elem.style.opacity = opacity;
    }, 20);
  }
}