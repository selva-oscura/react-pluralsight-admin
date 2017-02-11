import 'babel-polyfill'; // needed to polyfill ES6 that babel can't transpile -- rather big (50k), so should actually only import the bits of it that are needed, but quick and dirty for the tutorial
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';  // gives nice, clean urls; could use hashRouter, but a bit ugly looking
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// to pass initial state, primed from a server, database, or localStore, we'd pass this data to configureStore;
const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
