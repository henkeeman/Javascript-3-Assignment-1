import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import EventsView from './EventsView'
import CreateEventView from './CreateEvent'
import EventDetailsView from './EventDetailsView'

const Views = () => {


    

    return(
        <div>
            <Routes>
                <Route path='/' element={<HomeView/>}></Route>
                <Route path='/events' element={<EventsView/>}></Route>
                <Route path='/createEvent' element={<CreateEventView/>}></Route>
                <Route path="/events/:_id" element={<EventDetailsView />}></Route>

            </Routes>
        </div>

    )




}


export default Views