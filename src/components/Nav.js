import React from 'react';

const Nav = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="http://localhost:3000/">
					<img
						src="https://upload.wikimedia.org/wikipedia/en/0/0a/Logo_of_the_SCP_Foundation.png"
						alt=""
						width="40"
						height="40"
						className="d-inline-block align-text-top"
					/>
					Stock Flow
				</a>
				<nav className="nav">
					<a className="nav-link active" href="http://localhost:3000/">
						Home
					</a>
					<a className="nav-link" href="http://localhost:3000/">
						Analytics
					</a>
					<a className="nav-link" href="http://localhost:3000/">
						Logout
					</a>
				</nav>
			</div>
		</nav>
	);
};

export default Nav;
