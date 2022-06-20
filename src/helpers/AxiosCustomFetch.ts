import axios from 'axios';

const AxiosCustomFetch = axios.create({
  paramsSerializer: (params: Record<string, number>) =>
    Object.keys(params)
      .map((key) => {
        // Encode objects and array to json. (used for cellIds and drillParams.)
        const value = typeof params[key] === 'object' ? JSON.stringify(params[key]) : params[key];
        return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
      })
      .join('&'),
});

AxiosCustomFetch.interceptors.request.use(async (config) => {
  config.headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  return config;
});

export default AxiosCustomFetch;
