import axios from 'axios'
import actiontypes from '../actiontypes';

export const getEvents = () => {
  return async dispatch => {
    try {
      const res = await axios.get('http://localhost:5000/api/products')
        dispatch(setEvents(res.data))
      
      
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
