import React from 'react';
import axios from 'axios';

class SharesCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="shares-card card ml-5 mr-5 mb-4 align-center">
				<div className="d-flex">
					<div className="d-flex flex-column mr-auto m-3">
						<h4>{this.props.stock.companyname}</h4>
						<button type="button" className="sell-btn btn btn-secondary btn-sm mt-2">
							Sell
						</button>
					</div>
					<div className="d-flex flex-column m-3 shares-data">
						<div className="d-flex justify-content-between">
							<span className="mr-auto">Current Value</span> <strong>$5,000.00</strong>
						</div>
						<div className="d-flex justify-content-between">
							<span className="mr-auto">Day's Gain</span> <strong>$219.00</strong>
						</div>
						<div className="d-flex justify-content-between">
							<span>Total Shares</span> <strong>{this.props.stock.totalshares}</strong>
						</div>
						<div className="d-flex justify-content-between">
							<span>List Price</span> <strong>${this.props.currentPrice.quote.latestPrice}</strong>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SharesCard;
