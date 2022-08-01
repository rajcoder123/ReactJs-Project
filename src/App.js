import './App.css';
import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div> 
          <Router>
              <NavBar/>
                <div className="container">
                <Routes>
                  <Route exact path="/" element={<News key="home" />}/>
                  <Route exact path="/science"  element={<News key="science" country="us" category="science"/>}/>
                  <Route exact path="/business"  element={<News key="business" country="us" category="business"/>}/>
                  <Route exact path="/entertainment"  element={<News key="entertainment" country="us" category="entertainment"/>}/>
                  <Route exact path="/health" element={<News key="health" country="us" category="health"/>}/>
                  <Route exact path="/technology"  element={<News key="technology" country="us" category="technology"/>}/>
                  <Route exact path="/sports" element={<News key="sports" country="us" category="sports"/>}/>
                </Routes>
                </div>
          </Router>
      </div>
      
    )
  }
}
