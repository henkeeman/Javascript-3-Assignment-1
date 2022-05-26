import axios from 'axios'
import actiontypes from '../actiontypes';

export const getEvent = (param) => {
    return async dispatch => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${param}`)
          dispatch(setEvent(res.data))
          console.log(res.data)
      }
      catch(err) {
        dispatch(setEvent(err.message))
      }
    }
  }
  
  const setEvent = (event) => {
    return {
      type: actiontypes().event.setEvent,
      payload: event
    }
  }
  