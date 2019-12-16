import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import BookListPage from './pages/Book/BookListPage';
import BookFormPage from './pages/Book/BookForm/BookFormPage';

class App extends Component {
  render() {
    return (
      <Router>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">React Redux CRUD</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="books">Books</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
        	<Route exact path="/" component={Home}/>
        	<Route exact path="/books" component={BookListPage}/>
          <Route path="/books/create" component={BookFormPage}/>
          <Route path="/books/:id/edit" component={BookFormPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
