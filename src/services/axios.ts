import axios from 'axios';

const createInterceptor = () => {
  const baseInstance = axios.create({
    // baseURL: import.meta.env.BASE_URL,
    baseURL: '/api',
  });
  baseInstance.defaults.withCredentials = true;

  return baseInstance;
};

const Axios = createInterceptor();

export default Axios;
