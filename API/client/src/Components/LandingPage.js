import React from 'react';
import Header from './Header';

import SignUpModal from './SignUpModal';
import axios from 'axios';
import history from '../History';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			user: {},
			username: '',
			password: ''
		};
		this.setModalShow = this.setModalShow.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	setModalShow(bool) {
		this.setState({
			modalShow: bool
		});
	}

	onFormSubmit(e) {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;
		if (username && password !== null) {
			this.setState({
				username,
				password
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.username !== this.state.username) {
			console.log(this.state.username);
			let config = {
				params: {
					username: this.state.username,
					password: this.state.password
				}
			};

			axios
				.get('http://localhost:5000/api/login', config)
				.then((response) => {
					console.log(response.data);
					window.localStorage.setItem('user_id', response.data.id);
					history.push('/portfolio');
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	render() {
		return (
			<div className="splash-page">
				<Header />
				<div className="landing-page d-flex justify-content-center align-items-center">
					<div className="description d-flex flex-column landing-container justify-content-center align-items-start p-5">
						<h2 className="m-3">Build your risk free portfolio</h2>
						<p className="ml-3">
							Use this application to build your own portfolio. Gain experience with the stock market
							without the risk of losing your investments.
						</p>
					</div>
					<div className="d-flex flex-column landing-container justify-content-center align-items-center">
						<div className="card login-card form-container mb-3">
							<form className="d-flex flex-column" onSubmit={this.onFormSubmit}>
								<h3 className="align-self-center">Login</h3>
								<div className="form-group">
									<label>Username</label>
									<input
										type="text"
										className="form-control"
										id="username"
										placeholder="Enter username"
									/>
								</div>
								<div className="form-group">
									<label>Password</label>
									<input
										type="password"
										className="form-control"
										id="password"
										placeholder="Password"
									/>
								</div>

								<button type="submit" className="btn btn-secondary btn-sm">
									Login
								</button>
							</form>
						</div>
						<div className="form-container login-card card">
							<div className="card-body d-flex align-items-center justify-content-between">
								<span>Need an account?</span>
								<button
									type="button"
									onClick={() => this.setModalShow(true)}
									className="btn btn-secondary btn-sm"
								>
									Sign up
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center disclaimer">
					<p>This application does not use real money. Purchases made using this app are pure fiction.</p>
				</div>
				<SignUpModal
					// tweet={this.state.randomTweet}
					show={this.state.modalShow}
					onHide={() => this.setModalShow(false)}
				/>
			</div>
		);
	}
}

export default LandingPage;
