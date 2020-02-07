import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div className="form" style={styles.form}>
			<label style={styles.label}>{label}</label>
			<input {...input} style={styles.input} />
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};

const styles = {
	input: {
		borderBottom: '.75px solid #9F7BC1',
		marginBottom: '5px'
	},
	form: {
		marginTop: '1rem'
	},
	label: {
		color: '#9F7BC1',
		fontWeight: 'bold',
		fontSize: '14px'
	}
};
