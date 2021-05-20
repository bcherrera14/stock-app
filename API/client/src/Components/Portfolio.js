import React from 'react';
import axios from 'axios';
import SideNavBar from './SideNavBar';
import SharesCard from './SharesCard';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: ''
		};
	}

	render() {
		return (
			<div className="portfolio">
				<div className="d-flex align-items-center m-4">
					<h1 className="mb-0">My Portfolio</h1>
					<button type="button" class="btn btn-primary ml-auto">
						Purchase Stocks
					</button>
				</div>
				<hr className="m-3" />
				<SharesCard />
				<SharesCard />
				<SharesCard />
			</div>
		);
	}
}

export default Portfolio;
