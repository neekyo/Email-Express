import React from 'react';

const Landing = () => {
	return (
		<React.Fragment>
			<div className="landing">
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
					</div>
					<p style={styles.copyright}>Copyright &copy; 2020 by Email Express </p>
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
		fontSize: '12px'
	}
};

export default Landing;
