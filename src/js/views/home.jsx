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

	const IMG_PEOPLE = "https://mui.today/__export/1621346854469/sites/mui/img/2021/05/18/luke-skywalker.jpg_882530974.jpg"; 
	const IMG_VEHICLE = "https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"; 
	const IMG_PLANET = "https://static.wikia.nocookie.net/9a4cef88-cb06-464f-8084-27c2c0c1091f"; 
	
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
						<Card key = {people.uid} element = {people} handler = {handleClickPeople} img = {IMG_PEOPLE}/> 
					)
				})}
			</div>
			<h3 className="section-title mt-5 p-3">Vehicles</h3>
			<div className="text-center mt-5 d-flex" >
			{vehiclesList.map((vehicle) => {
					return (
						<Card key = {vehicle.uid} element = {vehicle} handler = {handleClickVehicles} img= {IMG_VEHICLE}/> 
					)
				})}
			</div>
			<h3 className="section-title mt-5 p-3">Planets</h3>	
			<div className="text-center mt-5 d-flex" >
			{planetsList.map((planet) => {
					return (
						<Card key = {planet.uid} element = {planet} handler = {handleClickPlanets} img = {IMG_PLANET}/> 
					)
				})}
			</div>	
		</div>
	)
};

export default Home; 
