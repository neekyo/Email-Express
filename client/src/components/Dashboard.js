import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			Dashboard
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating btn-large" style={styles.add}>
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

let styles = {
	add: {
		backgroundColor: '#9F7BC1'
	}
};

export default Dashboard;
