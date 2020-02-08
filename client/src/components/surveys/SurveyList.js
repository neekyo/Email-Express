import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map((survey) => {
			return (
				<div className="card darken-1" key={survey._id}>
					<div className="card-content white-text" style={styles.card}>
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
					</div>
					<div className="card-action">
						<a style={styles.action}>Yes: {survey.yes}</a>
						<a style={styles.action}>No: {survey.no}</a>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

const styles = {
	card: {
		backgroundColor: '#9F7BC1'
	},
	action: {
		color: '#9F7BC1',
		fontWeight: 'bold'
	}
};

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
