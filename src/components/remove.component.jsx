import propTypes from 'prop-types';
import React from 'react';

const Remove = ({ handleRemove }) => (
	<button type="button" className="btn btn-danger" onClick={handleRemove}>
		<i className="fa fa-times" />
	</button>
);

Remove.propTypes = {
	handleRemove: propTypes.func.isRequired,
};

export default Remove;
