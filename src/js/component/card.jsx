import React from "react";

const Card = ({element, handler, img}) => {

    return (
        <div className="card m-2 " style={{ width: "18rem" }} key={element.uid}>
            <img src= {img} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button className="btn btn-primary" onClick={() => {handler(element.uid)}}>Learn More!</button>
            </div>
        </div>
    );
}; 

export default Card; 