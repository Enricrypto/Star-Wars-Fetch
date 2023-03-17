import React, { useContext, useSyncExternalStore } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/card.css";

const Card = ({ element, handler, img }) => {

    const { store, actions } = useContext(Context);

    const handleClick = () => {
        actions.addFavorites(element.name); 
        console.log(store.favorites); 
    }; 
    
    return (
        <div className="container-fluid py-2">
            <div className="d-flex flex-row flex-nowrap">
                <div className="card m-2 " style={{ width: "18rem" }} key={element.uid}>
                    <div className="card-body d-flex flex-column">
                        <img src={img} className="img-card card-img-top" alt="..." />
                        <h5 className="card-title pt-3">{element.name}</h5>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="d-flex justify-content-around p-3">
                            <button className="btn btn-primary px-1" onClick={() => { handler(element.uid) }}>Learn More!</button>
                            <button className="btn btn-light" onClick={handleClick}>❤️</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card; 