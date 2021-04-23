import React from 'react';
import SignUpModal from './SignUpModal';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false
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
			<div>
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
							<form className="d-flex flex-column">
								<h3 className="align-self-center">Login</h3>
								<div class="form-group">
									<label for="username">Username</label>
									<input
										type="text"
										class="form-control"
										id="username"
										placeholder="Enter username"
									/>
								</div>
								<div class="form-group">
									<label for="exampleInputPassword1">Password</label>
									<input
										type="password"
										class="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
								</div>

								<button type="button" class="btn btn-secondary btn-sm">
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
