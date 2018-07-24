import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact name="John Goe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact name="Karen Lah" email="klah@gmail.com" phone="666-666-6665" />
      </div>
    );
  }
}

export default App;
