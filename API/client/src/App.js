import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header';
import LandingPage from './Components/LandingPage';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={LandingPage} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
