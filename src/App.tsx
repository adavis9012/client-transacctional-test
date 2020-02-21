import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from './components/services/store/DefaultStore';
import MyAccountPage from './components/pages/MyAccountPage';
import MovementsPage from "./components/pages/MovementsPage";

import './components/settings/_variables.scss';
import './components/settings/_base.scss';
import './App.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
    	<Router>
    		<Route path="/" component={MyAccountPage} exact={true}/>
    		<Route path="/movimiento/:id" component={MovementsPage} />
    	</Router>
    </Provider>
  );
}

export default App;
