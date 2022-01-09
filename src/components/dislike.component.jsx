import React from 'react';
import propTypes from 'prop-types';

const Dislike = ({ liked, handleReact }) => {
	return (
		<button
			type="button"
			onClick={() => handleReact(`${liked !== 'disliked' ? 'disliked' : ''}`)}
			className={`btn ${liked === 'disliked' ? 'btn-danger' : ''}`}
		>
			<i className="fa fa-thumbs-down" />
		</button>
	);
};

Dislike.propTypes = {
	liked: propTypes.string.isRequired,
	handleReact: propTypes.func.isRequired,
};

export default Dislike;
