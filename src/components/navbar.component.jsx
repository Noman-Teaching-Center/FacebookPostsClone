import propTypes from 'prop-types';
import React from 'react';

const Navbar = ({ noOfPostsLiked, noOfPostsDisliked }) => (
	<div className="navbar bg-dark text-white p-4">
		<h1>Facebook</h1>
		<h3>Likes: {noOfPostsLiked}</h3>
		<h3>Dislikes: {noOfPostsDisliked}</h3>
	</div>
);

Navbar.propTypes = {
	noOfPostsLiked: propTypes.number.isRequired,
	noOfPostsDisliked: propTypes.number.isRequired,
};

export default Navbar;
