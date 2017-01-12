// code goes here
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

const NavBar = () => {
    return (
        <div>
            <ul role="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favoriteMovies">Favorite Movies</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
            </ul>
        </div>
    )
}

const App = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  )
}

const Main = () => {
    return (
        <div>
            <h1>Main Page</h1>
        </div>
    )
}

const Hobbies = () => {
  return (
    <div>
      <h1>Hobbies</h1>
      <ul>
        <li>Hiking</li>
        <li>Video Games</li>
        <li>Soccer</li>
        <li>Coding React</li>
      </ul>
    </div>
  )
}

const FavoriteMovies = () => {
    return (
        <div>
            <h1>Favorite Movies</h1>
            <ul>
                <li>War Games</li>
                <li>Finding Dory</li>
                <li>Jurassic Park</li>
                <li>Lost in the Translation</li>
            </ul>
        </div>
    )
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/hobbies" component={Hobbies} />
      <Route path="/favoriteMovies" component={FavoriteMovies} />
    </Route>
  </Router>
), document.getElementById('container'))
