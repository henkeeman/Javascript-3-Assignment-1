import React from "react";
import { Link } from 'react-router-dom'


const Event = (props) => {

    const date = new Date(props.header);

    let formatDate =  date.toLocaleString([], {hour12: false,});
    formatDate = formatDate.substring(0,formatDate.length-3);
    console.log(formatDate);
    return(
        <div class="card text-dark bg-light mb-3" style={{width: '40rem'}}>
            <div class="card-header">{formatDate}</div>
            
            <div class="card-body">
                <Link to={`/events/${props._id}`}><h5 class="card-title">{props.title}</h5></Link>
                
                <p class="card-text">{props.text}</p>
            </div>
        </div>

    )




}

export default Event;