import React, {useContext} from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";


const Navbar = () => {

	const {store, actions, setStore} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<div className="container-fluid d-flex p-2">
				<img className="navbar-logo" src="https://logo-download.com/wp-content/data/images/png/Star-Wars-logo.png" alt="" />
				</div>
			</Link>
			<div className="dropdown p-4">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((elem, index) => <li key={index}>{elem} <span><i onClick={() => actions.deleteFavorites(index)}>🗑️</i></span></li>)}
					</ul>
			</div>
		</nav>
	);
};

export default Navbar; 
