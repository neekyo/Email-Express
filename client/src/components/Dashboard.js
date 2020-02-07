import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
	return (
		<div>
			<SurveyList />
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating btn-large" style={styles.add}>
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

const styles = {
	add: {
		backgroundColor: '#9F7BC1'
	}
};

export default Dashboard;
