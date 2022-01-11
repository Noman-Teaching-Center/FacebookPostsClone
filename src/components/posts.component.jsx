import React, { Component } from 'react';

import Post from './post.component';
import postsData from '../services/posts.services';
import Navbar from './navbar.component';
import NewPostForm from './newPostForm.component';

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			posts: postsData,
			nonce: postsData.length,
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

	// eslint-disable-next-line react/no-unused-class-component-methods
	createADummyNewPost = () => {
		const { posts, nonce } = this.state;
		const dummyPost = {
			id: nonce + 1,
			title: `Post ${nonce + 1}`,
			date: '10/11/2020',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt eget justo ac aliquam. Ut commodo purus fermentum tincidunt vulputate. Quisque mattis dolor vel metus consectetur suscipit. Donec pulvinar gravida finibus. Ut non velit mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas tincidunt ipsum quis ultricies.',
			img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
			liked: '',
		};
		this.setState({
			posts: [dummyPost, ...posts],
			nonce: nonce + 1,
		});
	};

	render() {
		const { posts } = this.state;
		return (
			<>
				<Navbar
					noOfPostsLiked={this.getNoOfLikedPosts()}
					noOfPostsDisliked={this.getNoOfDislikedPosts()}
				/>
				<div className="flex flex-col space-y-4 w-3/5 m-auto">
					<button
						type="button"
						className="btn btn-primary w-1/2 p-2 my-4 mx-auto"
						data-toggle="modal"
						data-target="#exampleModalCenter"
					>
						Add New Post
					</button>
					<NewPostForm />
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
