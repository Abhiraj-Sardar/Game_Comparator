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
            <i class="fa-solid fa-headset">  {props.users}</i><i className="fa-solid fa-arrow-up text-success"></i><br />
            <i class="fa-solid fa-money-bill"> {props.worth}</i><i className="fa-solid fa-arrow-down text-danger"></i><br />
            <i class="fa-solid fa-layer-group">
                {(props.platforms).length<40?(<span className="badge rounded-pill text-bg-warning">{props.platforms}</span>):(<span className="badge rounded-pill text-bg-warning">PC</span>)}
            </i>
            <br />
            <i class="fa-solid fa-calendar"> {(props.pubDate).split(" ")[0]}</i> <br />
            <i class="fa-solid fa-calendar"> {(props.endDate).split(" ")[0]}</i>
        </div>
    )
}

export default Card
