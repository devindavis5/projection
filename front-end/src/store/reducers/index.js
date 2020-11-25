//any initial state in app needs to go here
export const initialState = {
    usernameInput: '',
    passwordInput: '',
    user: {}
}
//need reducer for every state change
export const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USERNAME_INPUT':
            return {
                ...state,
                usernameInput: action.value
            }
        break;
        case 'SET_PASSWORD_INPUT':
            return {
                ...state,
                passwordInput: action.value
            }
        break;
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        break;
    }
    return state
}
