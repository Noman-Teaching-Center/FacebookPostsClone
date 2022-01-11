import React from 'react';

const NewPostForm = () => (
	<div
		className="modal fade"
		id="exampleModalCenter"
		tabIndex="-1"
		role="dialog"
		aria-labelledby="exampleModalCenterTitle"
		aria-hidden="true"
	>
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLongTitle">
						Create a New Post
					</h5>
					<button
						type="button"
						className="close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form className="flex flex-col space-y-2">
						<label htmlFor="postTitle">
							<span className="p-2">Title</span>
							<input
								id="postTitle"
								type="text"
								className="border-2 border-black p-2"
							/>
						</label>
						<label htmlFor="postTitle">
							<span className="p-2">Date</span>
							<input
								id="postTitle"
								type="date"
								className="border-2 border-black p-2"
							/>
						</label>
						<label htmlFor="postTitle">
							<textarea
								id="postTitle"
								type="text"
								className="border-2 border-black p-2"
							/>
						</label>
					</form>
				</div>
				<div className="modal-footer">
					<button
						type="button"
						className="btn btn-secondary"
						data-dismiss="modal"
					>
						Discard
					</button>
					<button type="button" className="btn btn-primary">
						Post
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default NewPostForm;
