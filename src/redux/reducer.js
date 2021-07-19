const initialState = {
   repositories: {}
  }

  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_REPOSITORIES':
        return {
          ...state,
          repositories: action.payload,
        }
      default:
        return state
    }
  }

  export default reducer