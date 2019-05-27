import { LOGIN_USER, LOGOUT_USER } from '../actions/authActions';
import { getToken } from '../helpers/session';

export function setDefaultAuth() {
  const sessionToken = getToken();
  if(sessionToken) {
    return { isAuthenticated: true };
  }
  return { isAuthenticated: false };
}

export default function authReducer(state = { isAuthenticated: false }, { type }) {
  if (type === LOGIN_USER) {
    return { isAuthenticated: true }
  } else if (type === LOGOUT_USER) {
    return { isAuthenticated: false }
  }
  return state;
}
