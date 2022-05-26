import actiontypes from '../actiontypes';

const initState = {
  data: [],
  error: null
}


const eventReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().event.setEvent:
            return {
              data: action.payload,
              error: null
            }

        default: 
        return state
    }
}

export default eventReducer;
