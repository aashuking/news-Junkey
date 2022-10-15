
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx'
import News from './components/News.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <div>
      <Router>
      <div>
      <Navbar></Navbar>
      
      <Switch>
          <Route exact path="/">
          <News pageSize={6} key="general" category="general"></News>
          </Route>
          <Route exact path="/business">
          <News pageSize={6}  key="business"category="business"></News>
          </Route>
          <Route  exact path="/sports">
          <News pageSize={6} key="sports" category="sports"></News>
          </Route>
          <Route  exact path="/science">
          <News pageSize={6}  key="science"category="science"></News>
          </Route>
          <Route  exact path="/health">
          <News pageSize={6} key="health" category="health"></News>
          </Route>
          <Route exact  path="/entertainment">
          <News pageSize={6} key="entertainment" category="entertainment"></News>
          </Route>
          <Route exact  path="/technology">
          <News pageSize={6}key="technology" category="technology"></News>
          </Route>
          

        </Switch>
        
      </div>
      </Router>
      </div>
    );
    
  }
  
}

export default App;
