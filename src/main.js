import React from 'react'
import ReactDom from 'react-dom'

import { Router, Route, browserHistory, Redirect } from 'react-router'

import Layout from './components/layout'
import Home from './components/home';
import News from './components/news';
import Offers from './components/offers';
import Videos from './components/videos';
import Prices from './components/prices';
import Contact from './components/contact';

ReactDom.render(
  <Router history={browserHistory}>
    <Route component={Layout} path="/">
       <Route component={Home} path="/home" />
       <Route component={News} path="/news" />
       <Route component={Offers} path="/lesson" />
       <Route component={Videos} path="/videos" />
       <Route component={Prices} path="/prices" />
       <Route component={Contact} path="/contact" />
    </Route>
  </Router>
  ,
  document.getElementById('app')
)
