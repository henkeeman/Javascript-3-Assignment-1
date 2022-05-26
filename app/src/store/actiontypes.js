const actiontypes = () => {
  return {
    events: {
      setEvents: 'SET_EVENTS',
      failure: 'EVENTS_FAILURE'
    },
    event: {
      setEvent:'SET_EVENT',
      failure: 'EVENT_FAILURE'
    }
  }
}
  
export default actiontypes;