import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '1234123123'
            },
            {
                id: 2,
                name: 'Karen',
                email: 'sdsad@gmail.com',
                phone: '2134543'
            }
            ,
            {
                id: 3,
                name: 'William',
                email: 'William@gmail.com',
                phone: '3152435234'
            },
            {
                id: 4,
                name: 'Kenson',
                email: 'Kenson@gmail.com',
                phone: '15134134321'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))

    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;