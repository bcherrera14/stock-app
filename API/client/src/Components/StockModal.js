import React from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
// import TweetCard from './TweetCard';

class StockModal extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			password: ''
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.username !== this.state.username) {
			console.log(this.state);
			let config = {
				params: {
					firstname: this.state.firstName,
					lastname: this.state.lastName,
					username: this.state.username,
					password: this.state.password
				}
			};

			axios
				.post('http://localhost:5000/api/users', null, config)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	onFormSubmit(e) {
		e.preventDefault();
		// console.log(e.target.password1.value);
		const firstName = e.target.firstname.value;
		const lastName = e.target.lastname.value;
		const username = e.target.username.value;
		const password1 = e.target.password1.value;
		const password2 = e.target.password2.value;

		if (firstName && lastName && username && password1 && password2 !== null) {
			if (password1 === password2) {
				this.setState({
					firstName: e.target.firstname.value,
					lastName: e.target.lastname.value,
					username: e.target.username.value,
					password: e.target.password1.value
				});
			} else {
				alert('Passwords do not match');
			}
		} else {
			alert('Please fill complete the form.');
		}

		// if (e.target.password1.value === e.target.password2.value) {
		// 	this.setState({
		// 		firstName: e.target.firstname.value,
		// 		lastName: e.target.lastname.value,
		// 		username: e.target.username.value,
		// 		password: e.target.password1.value
		// 	});
		// } else {
		// 	alert('Passwords do not match');
		// }
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
									aria-label="Recipient's username"
									aria-describedby="passwordHelpBlock"
								/>
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" type="button" id="button-addon2">
										Search
									</button>
								</div>
							</div>
							<small id="passwordHelpBlock" class="form-text text-muted">
								Please enter a ticker symbol. Ex: AAPL
							</small>
						</form>
						<div className="card m-3" id="stock-search-result">
							<div class="card-body form-row align-items-center justify-content-between">
								<div className="col-4 my-1 d-flex justify-content-between">
									<span className="mr-auto">Stock Name</span> <strong>$8.57</strong>
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
