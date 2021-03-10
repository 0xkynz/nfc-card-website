import Cookies from 'js-cookie';

const TokenKey = 'vcard_tk';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getTokenKey() {
  return TokenKey;
}
