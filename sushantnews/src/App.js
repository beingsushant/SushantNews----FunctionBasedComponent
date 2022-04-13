import React, { Component } from 'react';
import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      currentcategory: "general"
    }
  }

 updatecategory = () => {
    return this.setState({
      currentcategory: "general"
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"  element={<News key="general" category="general" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/home" element={<News key="general1" category="general" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/general" element={<News key="general2" category="general" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/business" element={<News key="business" category="business" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/health" element={<News key="health" category="health" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/science" element={<News key="science" category="science" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/sports" element={<News key="sports" category="sports" country="in" pageSize="20" />}>
            </Route>
            <Route exact path="/technology" element={<News key="technology" category="technology" country="in" pageSize="20" />}>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
