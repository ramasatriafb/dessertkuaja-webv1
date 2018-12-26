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
    
        default:
            return state
    }
}


export default authReducer