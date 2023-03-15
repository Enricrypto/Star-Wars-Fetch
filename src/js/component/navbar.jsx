import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<div className="container-fluid d-flex">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					</ul>
				</div>
				</div>
			</Link>
		</nav>
	);
};

export default Navbar; 
