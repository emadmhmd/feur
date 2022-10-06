/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { userType } from '../types/domain';
import vars from '../config/env.config';

const backendUrl = vars.get('backendUrl');

class User {
  signup = (user: userType) => axios.post(`${backendUrl}/api/user/create-new-user`, user);

  signin = (user: userType) => axios.post(`${backendUrl}/api/user/login`, user);

  getProfile = () => axios.get(`${backendUrl}/api/user`);
}

export default new User();
