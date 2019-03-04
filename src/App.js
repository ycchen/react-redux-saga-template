import React, { Component } from "react";
import "./App.css";
import { Container } from 'semantic-ui-react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom'
import ContactPage from './containers/ContactPage'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="ui three item menu">
            <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/about">About</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/contact">Contact</NavLink>
          </div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
