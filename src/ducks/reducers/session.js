const INITIAL_STATE = {
  authUser: null,
}

// const ADD_TASK = 'add task'
// const REMOVE_TASK = 'remove task'
// const GET_TASKS = 'get tasks'

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser,
})

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'AUTH_USER_SET': {
      return applySetAuthUser(state, action)
    // case GET_TASK:
    //   return action.tasks
    // case ADD_TASK:
    //   return [...state, action.task]
    // case REMOVE_TASK: 
    //   return state.filter(task => task.id !== action.task.id)
    }
    default:
      return state
  }
}

export default sessionReducer
