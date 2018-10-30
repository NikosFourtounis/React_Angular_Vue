import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Home from './components/Home/Home';
import './App.css';
import { Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/Faq" component={Faq} />
        <Footer/>
      </div>
    );
  }
}

export default App;
