import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import Book from './components/Book';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/new-book" component={Book} />
            <Route path="/book/:id" component={Book} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
