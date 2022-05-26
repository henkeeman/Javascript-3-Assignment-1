import actiontypes from '../actiontypes';

const initState = {
  data: [],
  error: null
}


const eventsReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().events.setEvents:
            return {
              data: action.payload,
              error: null
            }

        default: 
        return state
    }
}

export default eventsReducer;
