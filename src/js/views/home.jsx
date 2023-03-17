import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../styles/home.css";
import { getData } from "../service"
import Card from "../component/card.jsx";


const Home = () => {

	const [peopleList, setPeopleList] = useState([]);
	const [vehiclesList, setVehiclesList] = useState([]);
	const [planetsList, setPlanetsList] = useState([]);

	const getPeople = async () => {
		const response = await getData('people');
		console.log(response);
		setPeopleList(response.results);
	};

	const getVehicle = async () => {
		const response = await getData('vehicles');
		console.log(response);
		setVehiclesList(response.results);
	};

	const getPlanets = async () => {
		const response = await getData('planets');
		console.log(response);
		setPlanetsList(response.results);
	};

	useEffect(() => {
		getPeople();
		getVehicle(); 
		getPlanets(); 
	}, []);

	const navigate = useNavigate();

	const IMG_PEOPLE = (id) => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`; 
	const IMG_VEHICLE = (id) => ` https://starwars-visualguide.com/assets/img/planets/${id}.jpg`; 
	const IMG_PLANET = (id) => `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`; 
	
	// const IMG_FIXED =  "https://starwars-visualguide.com/assets/img/planets/4.jpg"; 

	const handleClickPeople = (id) => {
		navigate(`/people/${id}`)
	};

	const handleClickVehicles = (id) => {
		navigate(`/vehicles/${id}`)
	}; 

	const handleClickPlanets = (id) => {
		navigate(`/planets/${id}`)
	};

	return (
		<div>
			<h3 className="section-title mt-5 p-3">Characters</h3>
			<div className="text-center mt-5 d-flex" >
				{peopleList.map((people) => {
					return (
						<Card key = {people.uid} element = {people} handler = {handleClickPeople} img = {IMG_PEOPLE(people.uid)}/> 
					)
				})}
			</div>
			<h3 className="section-title mt-5 p-3">Vehicles</h3>
			<div className="text-center mt-5 d-flex" >
			{vehiclesList.map((vehicle) => {
					return (
						<Card key = {vehicle.uid} element = {vehicle} handler = {handleClickVehicles} img= {IMG_VEHICLE(vehicle.uid)}/> 
					)
				})}
			</div>
			<h3 className="section-title mt-5 p-3">Planets</h3>	
			<div className="text-center mt-5 d-flex" >
			{planetsList.map((planet) => {
					return (
						<Card key = {planet.uid} element = {planet} handler = {handleClickPlanets} img = {IMG_PLANET(planet.uid)}/> 
					)
				})}
			</div>	
		</div>
	)
};

export default Home; 
