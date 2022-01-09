import React, { Component } from 'react';

import Post from './post.component';
import postsData from '../services/posts.services';
import Navbar from './navbar.component';

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			posts: postsData,
		};
	}

	handleReact = (id, reaction) => {
		const { posts } = this.state;
		const updatedPosts = posts.map((post) => {
			if (post.id === id) {
				const p = {
					...post,
					liked: reaction,
				};
				return p;
			}
			return post;
		});

		this.setState({
			posts: updatedPosts,
		});
	};

	handleRemove = (_id) => {
		const { posts } = this.state;
		this.setState({
			posts: posts.filter(({ id }) => _id !== id),
		});
	};

	getNoOfLikedPosts = () => {
		const { posts } = this.state;
		return posts.reduce(
			(count, { liked }) => (liked === 'liked' ? count + 1 : count),
			0
		);
	};

	getNoOfDislikedPosts = () => {
		const { posts } = this.state;
		return posts.reduce(
			(count, { liked }) => (liked === 'disliked' ? count + 1 : count),
			0
		);
	};

	render() {
		const { posts } = this.state;
		return (
			<>
				<Navbar
					noOfPostsLiked={this.getNoOfLikedPosts()}
					noOfPostsDisliked={this.getNoOfDislikedPosts()}
				/>
				<button type="button" className="btn btn-primary m-4">
					Add New Post
				</button>
				<div className="flex flex-col space-y-4 w-2/3 m-4">
					{posts.map(({ id, title, date, content, img, liked }) => (
						<Post
							key={id}
							title={title}
							date={date}
							content={content}
							img={img}
							liked={liked}
							handleReact={(reaction) => this.handleReact(id, reaction)}
							handleRemove={() => this.handleRemove(id)}
						/>
					))}
				</div>
			</>
		);
	}
}

export default Posts;
