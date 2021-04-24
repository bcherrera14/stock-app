import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import TweetCard from './TweetCard';

function SignUpModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				<div className="signup-form">
					<form className="d-flex flex-column">
						<h3 className="align-self-center">Sign Up</h3>
						<div class="form-group">
							<label for="firstName">First Name</label>
							<input
								type="text"
								class="form-control form-control-sm"
								id="firstname"
								aria-describedby=""
								placeholder="Enter first name"
							/>
						</div>
						<div class="form-group">
							<label for="lastName">Last Name</label>
							<input
								type="text"
								class="form-control form-control-sm"
								id="lastname"
								aria-describedby=""
								placeholder="Enter last name"
							/>
						</div>
						<div class="form-group">
							<label for="username">Username</label>
							<input
								type="text"
								class="form-control form-control-sm"
								id="username"
								aria-describedby=""
								placeholder="Enter username"
							/>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								class="form-control form-control-sm"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword2">Retype Password</label>
							<input
								type="password"
								class="form-control form-control-sm"
								id="exampleInputPassword2"
								placeholder="Password"
							/>
						</div>

						<button type="submit" class="btn btn-secondary btn-sm">
							Sign Up
						</button>
					</form>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default SignUpModal;
