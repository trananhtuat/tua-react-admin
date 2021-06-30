const setThemeRef = (mode) => {
    return {
        type: 'SET_THEME_MODE',
        payload: mode
    }
}

const getThemeRef = () => {
    return {
        type: 'GET_THEME_MODE'
    }
}

const exportDefault = {
    setThemeRef,
    getThemeRef
}

export default exportDefault