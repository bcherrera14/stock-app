import React from 'react';

const LandingPage = () => {
	return (
		<div className="landing-page d-flex justify-content-center align-items-center">
			<div className="description d-flex flex-column landing-container justify-content-center align-items-start p-5">
				<h2 className="m-3">Build your risk free portfolio</h2>
				<p className="ml-3">
					Use this application to build your own portfolio. Gain experience with the stock market without the
					risk of losing your investments.
				</p>
			</div>
			<div className="d-flex flex-column landing-container justify-content-center align-items-center">
				<div className="card login-card form-container mb-3">
					<form className="d-flex flex-column">
						<h3 className="align-self-center">Login</h3>
						<div class="form-group">
							<label for="exampleInputEmail1">Username</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
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

						<button type="submit" class="btn btn-secondary btn-sm">
							Login
						</button>
					</form>
				</div>
				<div className="form-container login-card card">
					<div className="card-body d-flex align-items-center justify-content-between">
						<span>Need an account?</span>
						<button type="button" className="btn btn-secondary btn-sm">
							Sign up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
