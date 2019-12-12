import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import BookListPage from './pages/Book/BookListPage';
import BookFormPage from './pages/Book/BookForm/BookFormPage';

class App extends Component {
  render() {
    return (
      <Router>
      	<Link to="/">Home</Link> &nbsp;
      	<Link to="books">Books</Link>

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
