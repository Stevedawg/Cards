import React, { Component } from 'react';
import Card from './components/Cards/card'
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div>
      <h1>These are the Cards</h1>
      <Card />
      <Card />
      <Card />
      </div>
    );
  }
}

export default App;
