import React from 'react';

const Footer = () => {
	return (
		<nav className="navbar navbar-light bg-dark mt-4">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src="https://upload.wikimedia.org/wikipedia/en/0/0a/Logo_of_the_SCP_Foundation.png"
						alt=""
						width="40"
						height="40"
						className="d-inline-block align-text-top"
					/>
					Stock Flow
				</a>
			</div>
			<form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</nav>
	);
};

export default Footer;
