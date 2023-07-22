const login = (user) => {
    return {
        type: 'LOGIN',
        payload: user,
    }
}

const Logout = () => {
    return {
        type: 'LOGOUT',
        
    }
}