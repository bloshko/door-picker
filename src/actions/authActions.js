export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const loginUserAction = () => ({
  type: LOGIN_USER,
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER
});
