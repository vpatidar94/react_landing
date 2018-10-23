import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
