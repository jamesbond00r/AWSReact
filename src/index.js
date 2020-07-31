import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Lucky from './lucky.js';
import Contest from './Contest';
import Sweepstakes from './Sweepstakes'
import Tips from './tips.js';
import NotFound from './notFound.js'
import * as serviceWorker from './serviceWorker';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




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
			<Link to='/Sweepstakes'>Sweepstakes</Link>
			</li>
			<li>
			<Link to='/tips'>Tips</Link>
			</li>
			<li id="email">
				<Link  to="/lucky">Sign Up  <FontAwesomeIcon icon={faEnvelope}/>  </Link>
			</li>
			
				</ul>
			<Switch>
		<Route exact path="/" component={App} />
		<Route exact path="/index.html" component={App} />
		
		<Route path="/lucky" component={Lucky} />

		<Route path='/Contest' component={Contest} />
		<Route path='/Sweepstakes' component={Sweepstakes} />
		<Route path='/tips' component={Tips} />

		<Route component={NotFound} />
		</Switch>
	</div>
	</Router>




	)

	

ReactDOM.render(routing, document.getElementById('root'));





serviceWorker.unregister();
