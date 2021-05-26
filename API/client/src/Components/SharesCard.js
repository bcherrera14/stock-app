import React from 'react';
import axios from 'axios';

class SharesCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPrice: '69'
		};
		this.getCurrentStockPrice = this.getCurrentStockPrice.bind(this);
	}

	getCurrentStockPrice() {
		let config = {
			params: {
				stockSymbol: this.props.stock.symbol
			}
		};
		axios
			.get('http://localhost:5000/api/stocks/search', config)
			.then((response) => {
				console.log(response.data.latestPrice);
				// console.log(this.state);
				// this.setState({
				// 	currentPrice: response.data.latestPrice
				// });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		// this.getCurrentStockPrice();
	}

	render() {
		// let currentValue = this.state.currentPrice * this.props.stock.totalshares;
		return (
			<div className="shares-card card ml-auto mr-auto mb-4">
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
							<span>List Price</span> <strong>${this.state.currentPrice}</strong>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SharesCard;
