import React from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
// import TweetCard from './TweetCard';

class SignUpModal extends React.Component {
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
					<div className="signup-form">
						<form className="d-flex flex-column" onSubmit={this.onFormSubmit}>
							<h3 className="align-self-center">Sign Up</h3>
							<div class="form-group">
								<label for="firstName">First Name</label>
								<input
									type="text"
									class="form-control form-control-sm"
									id="firstname"
									aria-describedby=""
								/>
							</div>
							<div class="form-group">
								<label for="lastName">Last Name</label>
								<input
									type="text"
									class="form-control form-control-sm"
									id="lastname"
									aria-describedby=""
								/>
							</div>
							<div class="form-group">
								<label for="username">Username</label>
								<input
									type="text"
									class="form-control form-control-sm"
									id="username"
									aria-describedby=""
								/>
							</div>
							<div class="form-group">
								<label for="Password1">Password</label>
								<input type="password" class="form-control form-control-sm" id="password1" />
							</div>
							<div class="form-group">
								<label for="Password2">Retype Password</label>
								<input type="password" class="form-control form-control-sm" id="password2" />
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
}

export default SignUpModal;
