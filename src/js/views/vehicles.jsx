import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getData } from "../service";
import Description from "../component/description.jsx";
import "../../styles/people.css"; 


const Vehicles = () => {

    const params = useParams(); 
    const id = params.id; 
    
    const [vehicle, setVehicles] = useState({});

    const getVehicles = async () => {
		const response = await getData('vehicles', id);
		setVehicles(response.result.properties);
	};

    useEffect(() => {
		getVehicles();
	}, []);

    const IMG_VEHICLE = "https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"; 
    
return (
    <div>
        <Description element= {vehicle} img={IMG_VEHICLE}/>
        <div className="properties d-flex justify-content-around mt-5">
            <div className="d-flex flex-column align-items-center">
            <h5>Name</h5>
            <p>{vehicle.name}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Model</h5>
            <p>{vehicle.model}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Vehicle Class</h5>
            <p>{vehicle.vehicle_class}</p>    
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Manufacturer</h5>
            <p>{vehicle.manufacturer}</p>    
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Crew</h5>
            <p>{vehicle.crew}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Passengers</h5>
            <p>{vehicle.passengers}</p>
            </div>
            </div>            
        </div>
)

}; 

export default Vehicles; 