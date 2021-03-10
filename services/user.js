import request from '../utils/request';

export function login(data) {
  return request({
    url: '/api/v1/auth/signin',
    method: 'post',
    data,
  });
}

export function register(data) {
  return request({
    url: '/api/v1/auth/signup',
    method: 'post',
    data,
  });
}

export function get() {
  return request({
    url: '/api/v1/user',
    method: 'get',
  });
}

export function getByUsername(username) {
  return request({
    url: `/api/v1/user/${username}`,
    method: 'get',
  });
}

export function getByCardID(cardID) {
  return request({
    url: `/api/v1/user/card/${cardID}`,
    method: 'get',
  });
}

export function update(data) {
  return request({
    url: `/api/v1/user`,
    method: 'put',
    data,
  });
}
