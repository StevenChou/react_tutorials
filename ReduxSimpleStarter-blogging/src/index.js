import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'
import PostsIndex from './components/posts_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={PostsIndex} />
    </div>
  </BrowserRouter>
  , document.querySelector('.container'));
