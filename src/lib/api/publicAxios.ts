import axios from 'axios';
import { apiBaseUrl } from '../configs/api';

const publicAxios = axios.create({
  baseURL: apiBaseUrl,
});

export default publicAxios;
