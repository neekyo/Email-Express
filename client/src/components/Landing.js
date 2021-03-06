import React from 'react';

const Landing = () => {
	return (
		<React.Fragment>
			<div id="landing">
				<div style={styles.title} className="title">
					<h1>EMAIL EXPRESS</h1>
					<div className="desc">
						<h5>
							PROVIDE YOUR CUSTOMERS WITH EMAIL REVIEWS
							<br />
							&
							<br />
							RECEIEVE VALUABLE FEEDBACK
						</h5>
						<h6>
							<br />
							<b>Sign in</b> and get started!
						</h6>
					</div>
					<p style={styles.copyright}>
						Copyright &copy; 2020 by <b>Email Express</b>
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

const styles = {
	title: {
		textAlign: 'center',
		color: '#9F7BC1'
	},
	copyright: {
		position: 'absolute',
		bottom: 0,
		fontSize: '12px',
		paddingLeft: '.5rem'
	}
};

export default Landing;
