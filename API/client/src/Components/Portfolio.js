import React from 'react';
import axios from 'axios';
import SideNavBar from './SideNavBar';
import SharesCard from './SharesCard';
import StockModal from './StockModal';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: ''
		};
		this.setModalShow = this.setModalShow.bind(this);
	}

	setModalShow(bool) {
		this.setState({
			modalShow: bool
		});
	}

	render() {
		return (
			<div className="portfolio">
				<div className="d-flex align-items-center m-4">
					<h1 className="mb-0">My Portfolio</h1>
					<button type="button" className="btn btn-primary ml-auto" onClick={() => this.setModalShow(true)}>
						Purchase Stocks
					</button>
				</div>
				<hr className="m-3" />
				<SharesCard />
				<SharesCard />
				<SharesCard />
				<StockModal show={this.state.modalShow} onHide={() => this.setModalShow(false)} />
			</div>
		);
	}
}

export default Portfolio;
