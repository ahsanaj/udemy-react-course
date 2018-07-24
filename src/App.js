import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Contact
            name="John Goe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Karen Lah"
            email="klah@gmail.com"
            phone="666-666-6665"
          />
        </div>
      </div>
    );
  }
}

export default App;
