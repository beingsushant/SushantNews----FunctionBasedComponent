import React, { useState } from 'react';
import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
        height={4}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/"  element={<News key="general" setProgress={setProgress} category="general" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/home"  element={<News key="general1" setProgress={setProgress} category="general" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/general"  element={<News key="general2" setProgress={setProgress} category="general" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/business"  element={<News key="business" setProgress={setProgress} category="business" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/entertainment"  element={<News key="entertainment" setProgress={setProgress} category="entertainment" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/health"  element={<News key="health" setProgress={setProgress} category="health" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/science"  element={<News key="science" setProgress={setProgress} category="science" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/sports"  element={<News key="sports" setProgress={setProgress} category="sports" country="in" pageSize="20" />}>
          </Route>
          <Route exact path="/technology"  element={<News key="technology" setProgress={setProgress} category="technology" country="in" pageSize="20" />}>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App