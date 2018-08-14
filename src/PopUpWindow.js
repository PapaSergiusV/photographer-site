import React, { Component } from 'react'

export default class PopUpWindow extends Component {
  constructor(props) {
    super(props);
    this.eventPUW = this.eventPUW.bind(this);
    this.state = { path: this.props.pictures[this.props.id].path, id: this.props.id };
  }
  render() {
    return (
      <div className="PUWindow" onClick={this.props.close}>
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
}