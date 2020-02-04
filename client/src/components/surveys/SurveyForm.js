import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Line', name: 'subject' },
	{ label: 'Email Body', name: 'body' },
	{ label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return <Field key={name} component={SurveyField} type="text" label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
					{this.renderFields()}
					<Link to="/surveys" style={styles.cancel} className="red btn-flat white-text">
						Cancel
					</Link>
					<button type="submit" style={styles.submit} className="btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

let styles = {
	submit: {
		backgroundColor: '#9F7BC1'
	},
	cancel: {
		textDecoration: 'none'
	}
};

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);
