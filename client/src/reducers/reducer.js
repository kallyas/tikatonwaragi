
export default function users(state = initialState, action) {
    switch (action.type) {
    case types.ADD_USER:
    constnewId = state.users[state.users.length-1] + 1;
    return {
    ...state,
    users: state.users.concat(newId),
    usersById: {
    ...state.usersById,
    [newId]: {
    id: newId,
    name: action.name
    }
    },
    }
    case types.DELETE_USER:
    return {
    ...state,
    users: state.users.filter(id => id !== action.id),
    usersById: omit(state.usersById, action.id)
    }
    default:
    return state;
    }
    }