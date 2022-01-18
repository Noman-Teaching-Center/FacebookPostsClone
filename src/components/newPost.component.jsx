import propTypes from 'prop-types';
import React, { useState } from 'react';

const NewPostForm = ({ onSubmit }) => {
	const [showModal, setShowModal] = useState(false);
	const [input, setInput] = useState({});

	const handleOnInputChange = ({ target: { name, value } }) => {
		setInput((prevInput) => ({
			...prevInput,
			[name]: value,
		}));
	};

	return (
		<>
			<button
				className="bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Add New Post
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">Create New Post</h3>
									<button
										type="button"
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								<div className="relative p-6 flex-auto">
									<form className="flex flex-col space-y-2">
										<label htmlFor="postTitle" className="flex flex-row p-2">
											<span className="p-2 w-16">Title</span>
											<input
												id="postTitle"
												name="title"
												type="text"
												onChange={handleOnInputChange}
												className="border-2 border-black p-2 flex-grow"
											/>
										</label>
										<label htmlFor="postDate" className="flex flex-row p-2">
											<span className="p-2 w-16">Date</span>
											<input
												id="postDate"
												name="date"
												type="date"
												onChange={handleOnInputChange}
												className="border-2 border-black p-2 flex-grow"
											/>
										</label>
										<label htmlFor="postContent" className="flex flex-col p-2">
											<span className="p-2 m-auto">Content</span>
											<textarea
												id="postContent"
												name="content"
												type="text"
												onChange={handleOnInputChange}
												className="border-2 border-black p-2 flex-grow"
											/>
										</label>
									</form>
								</div>
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											onSubmit(input);
											setShowModal(false);
										}}
									>
										Post
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-75 fixed inset-0 z-40 bg-black" />
				</>
			) : null}
		</>
	);
};

NewPostForm.propTypes = {
	onSubmit: propTypes.func.isRequired,
};

export default NewPostForm;
