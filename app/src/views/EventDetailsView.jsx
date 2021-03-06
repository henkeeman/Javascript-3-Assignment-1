import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getEvent } from '../store/actions/eventAction'
import './EventDetailsView.css'

const EventDetailsView = () => {
    
    const param = useParams();
    console.log(param._id)

    const dispatch = useDispatch()
    const { data: event } = useSelector(state => state.event)

    useEffect(() => {
        dispatch(getEvent(param._id))
    },[dispatch])
    return(
        <div className ="eventView">
             <div className="card text-dark bg-light mb-3" style={{width: '40rem',height: '300px'}}>
         <div className="card-header">{event.date}</div>
        
         <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
            
              <p className="card-text">{event.information}</p>
            </div>
         </div>
        </div>
        
    )


}

export default EventDetailsView