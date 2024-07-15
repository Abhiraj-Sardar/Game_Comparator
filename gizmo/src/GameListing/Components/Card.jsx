import React from 'react'
import bat from "../../Assets/img/bat.jpg";
const Card = (props) => {
    return (
        <div class="game-card">
            <div class="card-image">
                <img src={props.img}/>
                <span className="badge rounded-pill text-bg-success">{props.status}</span>
            </div>
            <div class="category">{props.title} </div>
            <i class="fa-solid fa-gamepad"> {props.users}</i> &nbsp;
            <i class="fa-solid fa-gamepad"> {props.users}</i>
            
        </div>
    )
}

export default Card
