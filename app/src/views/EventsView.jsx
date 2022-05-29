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
    events.sort(function compareFn(a, b) {
        // console.log(`A ${new Date(a.date).getTime()} VS B ${new Date(b.date).getTime()}`)
        return (new Date(a.date) - new Date(b.date))
    })
    console.log(new Date().getTime())
    

    return(
        <div className="eventsView">
            <div>
                <h1>--------------------------- Upcoming Events ---------------------------</h1>
            </div>
            {events.map(event => new Date(event.date) > new Date() && <Event header=
            {event.date} title={event.title} text={event.information} _id={event._id}/>)}
            <div>
                <h1>--------------------------- Old Events ---------------------------</h1>
            </div>
            {events.map(event => new Date(event.date) < new Date() && <Event header=
            {event.date} title={event.title} text={event.information} _id={event._id}/>)}
            
            
        </div>
       
    )




}

export default EventsView