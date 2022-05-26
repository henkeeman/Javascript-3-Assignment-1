import React from "react";
import Event from "../components/Event";
import './EventsView.css'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../store/actions/eventsAction'
import { useEffect } from 'react'

const EventsView = () => {


    const dispatch = useDispatch()
    const { data: events } = useSelector(state => state.events)

    useEffect(() => {
        dispatch(getEvents())
    },[dispatch])
    console.log(events)
    return(
        <div className="eventsView">
            {events.map(event => <Event header=
            {event.date} title={event.title} text={event.information} _id={event._id}/>)}
            
            
        </div>
       
    )




}

export default EventsView