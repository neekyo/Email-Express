import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				return (
					<React.Fragment>
						<li>
							<Payments />
						</li>
						<li>
							<a href="api/logout">Logout</a>
						</li>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper" style={navStyle}>
					<Link to={this.props.auth ? '/survers' : '/'} className="left brand-logo">
						Email Express
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

const navStyle = {
	backgroundColor: 'gray'
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
