/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';
import Like from './like.component';
import Dislike from './dislike.component';
import Remove from './remove.component';

const Post = ({
	title,
	date,
	content,
	img,
	liked,
	handleReact,
	handleRemove,
}) => (
	<div className="card w-auto">
		<div className="card-body p-3 bg-slate-300 flex flex-col border-2 border-black">
			<h5 className="card-title my-auto">{title}</h5>
			<p className="card-text my-auto">{date}</p>
			<p className="card-text my-auto">{content}</p>
			<img src={img} alt="post" className="w-auto" />
			<hr />
			<div className="flex space-x-2">
				<input placeholder="comment" className="card-text p-2 flex-grow" />
				<Like liked={liked} handleReact={handleReact} />
				<Dislike liked={liked} handleReact={handleReact} />
				<Remove handleRemove={handleRemove} />
			</div>
		</div>
	</div>
);

Post.propTypes = {
	title: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	content: propTypes.string.isRequired,
	img: propTypes.string.isRequired,
	liked: propTypes.string.isRequired,
	handleReact: propTypes.func.isRequired,
	handleRemove: propTypes.func.isRequired,
};

export default Post;
