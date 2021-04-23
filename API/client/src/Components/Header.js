import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar expand="lg" className="fixed-top navbar-dark navbar-purple">
			<div className="container">
				<Link className="navbar-brand navbar-text" to="/">
					WALL ST. BETTOR
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
