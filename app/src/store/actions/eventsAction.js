import axios from 'axios'
import actiontypes from '../actiontypes';

export const getEvents = () => {
  return async dispatch => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      
    };
    try {
      const res = await axios.get('http://localhost:5000/api/products',config)
        dispatch(setEvents(res.data))
        console.log(localStorage.getItem("token"))
      
    }
    catch(err) {
      dispatch(setEvents(err.message))
    }
  }
}

const setEvents = (events) => {
  return {
    type: actiontypes().events.setEvents,
    payload: events
  }
}
