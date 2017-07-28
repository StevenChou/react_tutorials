import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component {
  render() {
    return <div>Hello!!</div>
  }
}

class Googlebye extends Component {
  render() {
    return <div>Googlebye!!</div>
  }
}

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  //   <App />
  // </Provider>
  <BrowserRouter>
    <div>
      <Route path="/hello" component={Hello} />
      <Route path="/goodbye" component={Googlebye} />
    </div>
  </BrowserRouter>
  , document.querySelector('.container'));
