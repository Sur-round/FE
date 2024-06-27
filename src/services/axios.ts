import axios from 'axios';

const createInterceptor = () => {
  const baseInstance = axios.create({
    // baseURL: import.meta.env.BASE_URL,
    baseURL: import.meta.env.VITE_BASE_URL || '/api',
  });
  baseInstance.defaults.withCredentials = true;

  return baseInstance;
};

const Axios = createInterceptor();

export default Axios;
