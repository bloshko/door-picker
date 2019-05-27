const TOKEN_KEY = 'token';

export function getToken() {
  return window.sessionStorage.getItem(TOKEN_KEY) || window.localStorage.getItem(TOKEN_KEY)
}

export function setToken(token, session = true) {
  clearTokens();
  if(session) {
    window.sessionStorage.setItem(TOKEN_KEY, token);
  } else {
    window.localStorage.setItem(TOKEN_KEY, token);
  }
}

export function clearTokens() {
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(TOKEN_KEY);
}