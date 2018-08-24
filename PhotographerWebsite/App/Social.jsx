import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Social extends Component {
    static propTypes = {
        holder: PropTypes.shape({
            phone: PropTypes.string.isRequired,
            linkVk: PropTypes.string.isRequired,
            linkInstagram: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        var phone = "Phone: " + this.props.holder.phone;
        return(
            <div className="row social">
                <a href={this.props.holder.linkInstagram}><i className="fab fa-instagram"></i></a>
                <a href={this.props.holder.linkVk}><i className="fab fa-vk"></i></a>
                <a href="" title={phone}><i className="fas fa-mobile-alt"></i></a>
            </div>
        );
    }
}