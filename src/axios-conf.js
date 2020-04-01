import axios from 'axios';

const instance = axios.create({
  baseURL: '' //insert firebase base url
});
export default instance;
