import React from "react";
import "../../styles/description.css"; 

const Description = ({element, img}) => {

    return (
        <div className="properties d-flex justify-content-around mt-5">
        <div className="details d-flex">
            <img className= "description-image" src={img} alt="" />
            <div className="p-3">
            <h3>{element.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore eum, aperiam aut quae facilis repellat porro laborum quasi, suscipit, magni explicabo eius nobis quas molestias tenetur provident debitis. Unde.</p>
            </div>
        </div>
        </div>
    );
}; 

export default Description; 