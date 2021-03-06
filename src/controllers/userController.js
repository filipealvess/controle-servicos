import axios from 'axios';
import { CREATE_USER_ROUTE, LOGIN_ROUTE } from '../api/routes';

export async function createUser(name, email, password) {
  try {
    const { status, data } = await axios.post(CREATE_USER_ROUTE, { name, email, password });

    return status === 201 ? data.data : null;
  } catch (error) {
    return null;
  }
}

export async function login(email, password) {
  try {
    const { status, data } = await axios.post(LOGIN_ROUTE, { email, password });

    return status === 200 ? data.data : null;
  } catch (error) {
    return null;
  }
}

export function getLocalUser() {
  const localUser = JSON.parse(localStorage.getItem('authenticatedUser'));

  return localUser;
}

export function setLocalUser(user) {
  localStorage.setItem('authenticatedUser', JSON.stringify(user));
}

export function deleteLocalUser() {
  localStorage.removeItem('authenticatedUser');
}
