import React from 'react';
import axios from 'axios';

class SideNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: ''
		};
	}

	render() {
		return (
			<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
				>
					<i className="m-2 rocket-launch" />
					<span className="fs-4">Stockfolio</span>
				</a>
				<hr />
				<ul className="nav nav-pills nav-fill flex-column mb-auto">
					<li className="nav-item">
						<a href="/portfolio" className="nav-link active d-flex align-items-center" aria-current="page">
							<i class="fas fa-home mr-2" />
							Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link d-flex align-items-center text-white" href="/dashboard">
							<i class="fas fa-chart-line mr-2" />
							Dashboard
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default SideNavBar;
