import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getData } from "../service";
import Description from "../component/description.jsx";
import "../../styles/people.css"; 


const Planets = () => {

    const {id} = useParams(); 
    
    const [planets, setPlanets] = useState({});

    const getPlanets = async () => {
		const response = await getData('planets', id);
		setPlanets(response.result.properties);
	};

    useEffect(() => {
		getPlanets();
	}, []);
 
    const IMG_PLANET = "https://static.wikia.nocookie.net/9a4cef88-cb06-464f-8084-27c2c0c1091f";

return (
    <div>
        <Description element= {planets} img = { IMG_PLANET }/>
        <div className="properties d-flex justify-content-around mt-5">
            <div className="d-flex flex-column align-items-center">
            <h5>Name</h5>
            <p>{planets.name}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Diameter</h5>
            <p>{planets.diameter}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Gravity</h5>
            <p>{planets.gravity}</p>    
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Population</h5>
            <p>{planets.population}</p>    
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Climate</h5>
            <p>{planets.climate}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Terrain</h5>
            <p>{planets.terrain}</p>
            </div>
            </div>            
        </div>
)

}; 

export default Planets; 