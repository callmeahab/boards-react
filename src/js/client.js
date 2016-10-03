import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import {Provider} from 'mobx-react'

import Layout from './pages/layout'
import Board from './pages/board'
import SubBoard from './pages/sub_board'
import Topic from './pages/topic'
import Posts from './pages/posts'

import store from './store'

const app = document.getElementById('app')
ReactDOM.render((
  <Provider context={store.subBoardStore}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Board} />
        <Route path="category/:sub_board_id" component={SubBoard}>
          <Route path="topics" component={Topic}>
            <Route path=":topic_id" component={Posts} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
), app)
