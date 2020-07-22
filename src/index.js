import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Lucky from './lucky.js';
import Contest from './Contest';
import NotFound from './notFound.js'
import * as serviceWorker from './serviceWorker';



const routing = (

	<Router>
 
	<div className="NavRouting">
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
			<Link to='/Contest'>Contest</Link>
			</li>
			<li>
				<Link to="/lucky">Sign Up</Link>
			</li>
			
				</ul>
			<Switch>
		<Route exact path="/" component={App} />

		<Route path="/lucky" component={Lucky} />

		<Route path='/Contest' component={Contest} />

		<Route component={NotFound} />
		</Switch>
	</div>
	</Router>




	)

	

ReactDOM.render(routing, document.getElementById('root'));





serviceWorker.unregister();
