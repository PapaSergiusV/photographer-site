import React, { Component } from 'react';

export default class Social extends Component {
    render() {
        return(
            <div className="row social">
                <a href={this.props.holder.instagram}><i className="fab fa-instagram"></i></a>
                <a href={this.props.holder.vk}><i className="fab fa-vk"></i></a>
                <a href={this.props.holder.any}><i className="fab fa-whatsapp"></i></a>
            </div>
        );
    }
}