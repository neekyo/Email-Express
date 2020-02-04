import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return <Field key={name} component={SurveyField} type="text" label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || '');

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide an input';
		}
	});
	return errors;
}

const styles = {
	submit: {
		backgroundColor: 'green'
	},
	cancel: {
		textDecoration: 'none'
	}
};

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
