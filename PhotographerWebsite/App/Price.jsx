import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Price extends Component {
    static propTypes = {
        price: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                about: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    }

    render() {
        var price = this.props.price.map(
            x => (<div key={x.id}><div className="col-xs-10"><p>{x.about}</p></div><div className="col-xs-2"><p>{x.price}</p></div></div>));
        return (
            <div className="col-sm-offset-1 col-sm-10">
                <h1 className="h1">Price</h1>
                <p className="first-p">Text for example</p>
                {price}
            </div>
        );
    }
}