import React, { Component } from 'react';

export default class Pictures extends Component {
  render() {
    return(
      <div className="row pictures">
        <div className="col-md-3 col-sm-4 col-xs-6 noMarg">
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 noMarg">
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 noMarg">
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 hidden-sm noMarg">
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
          <div className="picture">
            <img src="http://placehold.it/320x320" />
          </div>
        </div>
      </div>
    );
  }
}