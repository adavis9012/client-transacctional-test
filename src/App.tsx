import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './components/settings/_variables.scss';
import './components/settings/_base.scss';
import './App.scss';
import configureStore from './components/services/store/MyAccountStore';
import MyAccountPage from './components/pages/MyAccountPage';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
    	<Router>
    		<Route path="" component={MyAccountPage} />
    	</Router>
    </Provider>
  );
}

export default App;
