import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../context';

class Contact extends Component {
    state = {
        onShowContact: false
    }

    onDeleteClick = () => {
    };


    render() {
        const {name, email, phone} = this.props.contact;

        return (
            <div
                className={"card card-body mb-3"}>
                < h4>
                    {name}
                    <i className="fas fa-caret-down" style={{cursor: 'pointer'}}
                       onClick={() => {
                           this.setState({
                               onShowContact: !this.state.onShowContact
                           })
                       }}/>

                    <i className="fas fa-times"
                       style={{color: "red", float: "right", cursor: "pointer"}} onClick={this.onDeleteClick}/>
                </h4>

                {
                    this.state.onShowContact ? <ul className={"list-group"}>
                        <li className={"list-group-item"}>{email}</li>
                        <li className={"list-group-item"}>{phone}</li>
                    </ul> : null
                }
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,

};

export default Contact;