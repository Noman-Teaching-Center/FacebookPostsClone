import propTypes from 'prop-types';
import React from 'react';

const Like = ({ liked, handleReact }) => {
	return (
		<button
			type="button"
			onClick={() => handleReact(`${liked !== 'liked' ? 'liked' : ''}`)}
			className={`btn ${liked === 'liked' ? 'btn-primary' : ''}`}
		>
			<i className="fa fa-thumbs-up" />
		</button>
	);
};

Like.propTypes = {
	liked: propTypes.string.isRequired,
	handleReact: propTypes.func.isRequired,
};

export default Like;
