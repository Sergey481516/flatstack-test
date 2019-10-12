import 'whatwg-fetch';
import React from 'react';
import './assets/scss/main.scss';

import { Provider } from 'react-redux';
import configureStore from './store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import Layout from './components/Layout';
import Navigator from './components/Navigator';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Navigator>
        <Router>
          <Layout>
            <Switch>
              {routes.map((props, index) => (
                <Route key={index} {...props} />
              ))}
            </Switch>
          </Layout>
        </Router>
      </Navigator>
    </Provider>
  );
}

export default App;
