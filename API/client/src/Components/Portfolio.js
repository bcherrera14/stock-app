import React from 'react';
import axios from 'axios';
import SideNavBar from './SideNavBar';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: ''
		};
	}

	render() {
		return (
			<div className="">
				<h1>Portfolio</h1>
			</div>
		);
	}
}

export default Portfolio;
