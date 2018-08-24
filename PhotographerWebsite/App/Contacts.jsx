import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contacts extends Component {
    static propTypes = {
        holder: PropTypes.shape({
            address: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            linkVk: PropTypes.string.isRequired,
            linkInstagram: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        return (
            <div>
                <div className="col-sm-offset-1 col-sm-5">
                    <h1 className="h1">Contacts</h1>
                    <p className="first-p">{this.props.holder.address}</p>
                    <div className="links">
                        <div className="col-xs-2">
                            <p><i className="fas fa-mobile-alt"></i></p>
                            <p><i className="fab fa-vk"></i></p>
                            <p><i className="fab fa-instagram"></i></p>
                        </div>
                        <div className="col-xs-10">
                            <p>{this.props.holder.phone}</p>
                            <p><a href={this.props.holder.linkVk}>vk.com</a></p>
                            <p><a href={this.props.holder.linkInstagram}>instagram.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <h1 className="h1">Write me</h1>
                    <form action="/HomePage/EmailHandler" method="post">
                        <input type="text" name="email.Name" placeholder="Name" />
                        <input type="text" name="email.Phone" placeholder="Phone" />
                        <textarea name="email.Text"></textarea>
                        <button className="button" type="submit">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}