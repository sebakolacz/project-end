import React from 'react';
import hotel from "../Assets/Hotel.jpg";
import rooms from "../Assets/Rooms.jpg";
import restaurant from "../Assets/Restaurant.jpg";


const Information = () => {
    return (
        <div className="information__container">
            <div className="information__container-width">
                <div className="information__hotel">
                    <h1>Hotel</h1>
                    <img src={hotel} />
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>Consectetur adipisicing elit Non provident suscipit voluptate</h3>
                    <button className="information__button">READ MORE</button>
                </div>
                <div className="information__rooms">
                    <h1>Rooms</h1>
                    <img src={rooms} />
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>Consectetur adipisicing elit Non provident suscipit voluptate</h3>
                    <button className="information__button">READ MORE</button>
                </div>
                <div className="information__restaurant">
                    <h1>Restaurant</h1>
                    <img src={restaurant} />
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>Consectetur adipisicing elit Non provident suscipit voluptate</h3>
                    <button className="information__button">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Information;