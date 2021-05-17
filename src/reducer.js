

export const reducer = (state = {
user: null,
}, action) => {
    switch (action.type) {
        case 'User':
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
}