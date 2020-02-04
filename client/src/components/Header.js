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
						<li style={styles.credits}>Credits: {this.props.auth.credits}</li>
						<li>
							<Link to="api/logout" style={styles.logout}>
								Logout
							</Link>
						</li>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper" style={styles.header}>
					<Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo" style={styles.logo}>
						Email Express
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

const styles = {
	header: {
		backgroundColor: 'white',
		borderBottom: '.2rem solid #9F7BC1'
	},
	logo: {
		color: '#9F7BC1',
		fontWeight: 'bold',
		fontSize: '1.5rem',
		margin: '0 0 0 .7rem',
		textDecoration: 'none'
	},
	credits: {
		margin: '0 10px',
		color: '#9F7BC1'
	},
	logout: {
		color: '#9F7BC1',
		textDecoration: 'none'
	}
};

export default connect(mapStateToProps)(Header);
