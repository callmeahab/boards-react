import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, IndexRoute, hashHistory } from "react-router"

import Layout from './pages/layout'
import Board from './pages/board'
import SubBoard from './pages/sub_board'

const app = document.getElementById('app')
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Board} />
      <Route path="/subboard" component={SubBoard} />
    </Route>
  </Router>
), app)
