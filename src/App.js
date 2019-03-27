import React, {Component} from 'react';
import './App.css';
import Contacts from './component/Contacts';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Managers"/>
                    <div className="container">
                        <Contacts/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
