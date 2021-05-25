import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Route } from 'react-router-dom';

import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Portfolio from './Components/Portfolio';
import Dashboard from './Components/Dashboard';
import SideNavBar from './Components/SideNavBar';
import history from './History';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Route path="/" exact component={LandingPage} />
					<div className="d-flex">
						<SideNavBar />
						<Route path="/portfolio" exact component={Portfolio} />
						<Route path="/dashboard" exact component={Dashboard} />
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
