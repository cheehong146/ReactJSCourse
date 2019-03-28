import React, {Component} from 'react';
import {Consumer} from "../../context";
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        // check for error
        if (name === '') {
            this.setState({errors: {name: 'Name is required'}})
            return;
        }
        if (email === '') {
            this.setState({errors: {email: 'Email is required'}})
            return;
        }
        if (phone === '') {
            this.setState({errors: {phone: 'Phone is required'}})
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({type: 'ADD_CONTACT', payload: newContact})

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
    };

    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    {/*name field*/}
                                    <TextInputGroup label={'Name'} onChange={this.onChange} value={name}
                                                    placeholder={'Enter name...'} name={'name'} type={'text'} error={errors.name}/>

                                    {/*email field*/}
                                    <TextInputGroup label={'Email'} onChange={this.onChange} value={email}
                                                    placeholder={'Enter email...'} name={'email'} type={'email'} error={errors.email}/>

                                    {/*phone field*/}
                                    <TextInputGroup label={'Phone'} onChange={this.onChange} value={phone}
                                                    placeholder={'Enter phone...'} name={'phone'} type={'text'} error={errors.phone}/>

                                    {/*submit btn*/}
                                    <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default AddContact;