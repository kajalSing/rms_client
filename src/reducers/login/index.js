// redux initial state
const initialState = {
  currentUser: null,
};
// redux initial state

// mutations or action types
export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return setCurrentUser(state, action);
    default:
      return state;
  }
};
// mutations or action types

// reducers or reducer middleware
function setCurrentUser(state, action) {
  return {
    ...state,
    currentUser: { ...action.payload },
  };
}

// export default login;
