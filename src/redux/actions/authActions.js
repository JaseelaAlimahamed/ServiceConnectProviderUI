export const  LOGIN_STATUS = 'LOGIN_STATUS';
export const setLoginStatus = (isLoggedIn) =>({
    type:LOGIN_STATUS,
    payload:isLoggedIn
});