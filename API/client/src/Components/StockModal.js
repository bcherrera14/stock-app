import React from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
// import TweetCard from './TweetCard';

class StockModal extends React.Component {
	constructor() {
		super();
		this.state = {
			stockSymbol: '',
			stockName: '',
			stockPrice: ''
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.stockSymbol !== this.state.stockSymbol) {
			let config = {
				params: {
					stockSymbol: this.state.stockSymbol
				}
			};

			axios
				.get('http://localhost:5000/api/stocks/search', config)
				.then((response) => {
					console.log(response.data);
					this.setState({
						stockName: response.data.companyName,
						stockPrice: response.data.latestPrice
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
		if (prevState.stockPrice !== this.state.stockPrice) {
			let searchResult = document.getElementById('stock-search-result');
			searchResult.style.visibility = 'visible';
		}
	}

	onFormSubmit(e) {
		e.preventDefault();
		const stockSymbol = e.target.stockSymbol.value.toUpperCase();
		console.log(stockSymbol);
		this.setState({
			stockSymbol
		});
	}

	render() {
		return (
			<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Body>
					<div className="stock-modal">
						<form className="" onSubmit={this.onFormSubmit}>
							<h3 className="align-self-center">Purchase Stocks</h3>
							<hr />
							<p>
								Account Balance: <strong>$100,000.00</strong>
							</p>

							<div class="input-group mb-3 stock-input">
								<input
									type="text"
									class="form-control"
									id="stockSymbol"
									aria-label="Stock Symbol"
									aria-describedby="stockSymbol"
								/>
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" type="submit" id="button-addon2">
										Search
									</button>
								</div>
							</div>
							<small id="stock-example" class="form-text text-muted">
								Please enter a ticker symbol. Ex: AAPL
							</small>
						</form>
						<div className="card m-3" id="stock-search-result">
							<div class="card-body form-row align-items-center justify-content-between">
								<div className="col-4 my-1 d-flex justify-content-between">
									<span className="mr-auto">{this.state.stockName}</span>{' '}
									<strong>${this.state.stockPrice}</strong>
								</div>
								<div className="col-auto d-flex justify-content-end">
									<input
										class="col-sm-4 mr-4 form-control form-control-sm"
										type="text"
										placeholder="Quantity"
									/>
									<button type="button" class="btn btn-primary btn-sm">
										Buy
									</button>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default StockModal;
