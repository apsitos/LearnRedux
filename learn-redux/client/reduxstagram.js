import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/Photogrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Import CSS
import css from './styles/style.styl';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'))
