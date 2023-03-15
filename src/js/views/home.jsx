import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../styles/home.css";
import { getData } from "../service/index";


const Home = () => {
	const [peopleList, setPeopleList] = useState();
	const [vehiclesList, setVehiclesList] = useState([]);
	const [planetsList, setPlanetsList] = useState([]);

	const getPeople = async () => {
		try {
			const response = await getData();
			const people = await fetch (response.result.people); 
			const data = await people.json(); 
			const characters = data.results; 
			console.log(characters); 
			setPeopleList([...characters]); 
			console.log(peopleList);  
		} catch (err) {
			console.log("err");
		}
	};


	useEffect(() => {
		getPeople(); 
	}, []);

	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/detailedView`)
	}; 

	return (
		<div>
			<h3 className="section-title mt-5">Characters</h3>
			{/* {peopleList.map((character) => {
				<div className="text-center mt-5 d-flex" key={character.uid}>
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://yt3.googleusercontent.com/ytc/AL5GRJWCdpko_UBwILketfv6DoXdhyqkkA6E-SZti_xdPw=s900-c-k-c0x00ffffff-no-rj" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{character.name}</h5>
						<p className="card-text">{character.url}</p>
						<button className="btn btn-primary" onClick={handleClick}>Learn More!</button>
					</div>
				</div>
			</div>
			})} */}
		</div>
	)
};

export default Home; 
