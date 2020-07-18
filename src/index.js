import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Lucky from './lucky.js';
import NotFound from './notFound.js'
import * as serviceWorker from './serviceWorker';


const routing = (

	<Router>
	<div>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/lucky.js">Lucky</Link>
			</li>
				</ul>
			<Switch>
		<Route exact path="/" component={App} />

		<Route path="/lucky.js" component={Lucky} />

		<Route component={NotFound} />
		</Switch>
	</div>
	</Router>


	)

ReactDOM.render(routing, document.getElementById('root'));





serviceWorker.unregister();
