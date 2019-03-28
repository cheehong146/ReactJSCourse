import React, {Component} from 'react';
import './App.css';
import Contacts from './component/contacts/Contacts';
import Header from './component/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import AddContact from "./component/contacts/AddContact";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Managers"/>
                    <div className="container">
                        <AddContact/>
                        <Contacts/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
