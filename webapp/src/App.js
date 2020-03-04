import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Home from './components/home';
import Detail from './components/home/detail';
import Store from './store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/phones"/>
          <Route exact path="/phones" component={Home} />
          <Route path="/phones/:id(\d+)" component={Detail} />
          <Route path="/404" render={() => <h2>PAGE NOT FOUND</h2>} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
