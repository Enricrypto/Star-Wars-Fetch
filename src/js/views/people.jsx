import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getData } from "../service";
import Description from "../component/description.jsx";
import "../../styles/people.css"; 


const Detail = () => {

    const params = useParams(); 
    const id = params.id; 
    
    const [character, setCharacter] = useState({});

    const getPeople = async () => {
		const response = await getData('people', id);
		console.log(response.result.properties.name);
		setCharacter(response.result.properties);
	};

    useEffect(() => {
		getPeople();
	}, []);

    const IMG_PEOPLE = "https://mui.today/__export/1621346854469/sites/mui/img/2021/05/18/luke-skywalker.jpg_882530974.jpg"; 

    
return (
    <div>
        <Description element= {character} img = {IMG_PEOPLE}/>
        <div className="properties d-flex justify-content-around mt-5">
            <div className="d-flex flex-column align-items-center">
            <h5>Name</h5>
            <p>{character.name}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Birth</h5>
            <p>{character.birth}</p>    
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Gender</h5>
            <p>{character.gender}</p>    
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Height</h5>
            <p>{character.height}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Skin Color</h5>
            <p>{character.skin_color}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <h5>Eye Color</h5>
            <p>{character.eye_color}</p>
            </div>            
        </div>
    </div>
)

}; 

export default Detail; 