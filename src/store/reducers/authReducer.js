const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Gagal'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Sukses');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Sign Out Sukses');
            return state;
        default:
            return state
    }
}


export default authReducer