import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar expand="lg" className="fixed-top navbar-dark navbar-purple">
			<div className="container">
				<Link className="d-flex align-items-center navbar-brand navbar-text" to="/">
					{/* <i class="fas fa-rocket" /> */}
					<i className="rocket-launch" />
					<span className="pl-2">Stockfolio</span>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{/* <Link className="nav-link" to="/tweet/search">
							Portfolio
						</Link>
						<Link className="nav-link" to="/tweet/favorites">
							Logout
						</Link> */}
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
