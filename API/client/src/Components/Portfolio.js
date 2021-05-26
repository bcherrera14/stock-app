import React from 'react';
import axios from 'axios';
import SideNavBar from './SideNavBar';
import SharesCard from './SharesCard';
import StockModal from './StockModal';
import SharesList from './SharesList';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: window.localStorage.getItem('user_id'),
			modalShow: false,
			shares: [],
			accountBalance: 0
		};
		this.setModalShow = this.setModalShow.bind(this);
	}

	setModalShow(bool) {
		this.setState({
			modalShow: bool
		});
	}

	getUsersStocks() {
		let config = {
			params: {
				user: this.state.user_id
			}
		};
		axios
			.get('http://localhost:5000/api/stocks/id', config)
			.then((response) => {
				console.log(response.data);
				//console.log(this.state);
				this.setState({
					shares: response.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	getStockSymbol() {
		// for (const share in this.state.shares) {
		// 	console.log(share.symbol);
		// }
		// let symbolList = [...new Set(this.state.shares)];
		let symbolList = [];
		this.state.shares.forEach((share) => symbolList.push(share.symbol));
		symbolList = [ ...new Set(symbolList) ];
		let params = [];
		symbolList.forEach((symbol) => params.push({ params: { stockSymbol: symbol } }));
		//this.state.shares.forEach((share) => symbolList.push({ params: { stockSymbol: share.symbol } }));

		axios
			.all([
				axios.get('http://localhost:5000/api/stocks/search', params[0]),
				axios.get('http://localhost:5000/api/stocks/search', params[1]),
				axios.get('http://localhost:5000/api/stocks/search', params[2])
			])
			.then(
				axios.spread((...res) => {
					console.log(res);
				})
			);
		console.log(symbolList);
		console.log(params);
	}

	getCurrentStockPrice(symbol) {
		let config = {
			params: {
				stockSymbol: symbol
			}
		};
		axios
			.get('http://localhost:5000/api/stocks/search', config)
			.then((response) => {
				console.log(response.data);
				// console.log(this.state);
				// this.setState({
				// 	currentPrice: response.data.latestPrice
				// });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	getAccountBalance() {
		let config = {
			params: {
				user_id: this.state.user_id
			}
		};
		axios
			.get('http://localhost:5000/api/user/id', config)
			.then((response) => {
				console.log('stockmodal');
				console.log(response.data);
				this.setState({
					accountBalance: parseFloat(response.data.accountbalance)
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getUsersStocks();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.shares !== this.state.shares) {
			this.getStockSymbol();
		}
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
				<SharesList shares={this.state.shares} />
				{/* <SharesCard />
				<SharesCard />
				<SharesCard /> */}
				<StockModal
					modalState={this.state.modalShow}
					show={this.state.modalShow}
					onHide={() => this.setModalShow(false)}
				/>
			</div>
		);
	}
}

export default Portfolio;
