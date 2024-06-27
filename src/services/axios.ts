import axios from 'axios';

const createInterceptor = () => {
  const baseInstance = axios.create({
    // baseURL: import.meta.env.BASE_URL,
    baseURL: 'http://54.180.179.146:8080',
  });
  baseInstance.defaults.withCredentials = true;

  return baseInstance;
};

const Axios = createInterceptor();

export default Axios;
