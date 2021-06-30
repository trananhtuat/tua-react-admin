const ThemeReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_THEME_MODE':
            return {
                ...state,
                mode: action.payload
            }
        case 'GET_THEME_MODE':
            return state
        default:
            return state
    }
}

export default ThemeReducer