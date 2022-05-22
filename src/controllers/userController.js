import axios from 'axios';
import { CREATE_USER_ROUTE } from '../api/routes';

export async function createUser(name, email, password) {
  try {
    const { status, data } = await axios.post(CREATE_USER_ROUTE, { name, email, password });

    return status === 201 ? data.data : null;
  } catch (error) {
    return null;
  }
}
