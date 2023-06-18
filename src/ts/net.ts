import axios from "axios";

export const getToken = () => authToken ?? sessionStorage.getItem('token');
export const getGoogleToken = () => googleToken ?? sessionStorage.getItem('googleToken');

export const setToken = (token: string, storage = false) => { 
    authToken = token; 
    storage ? sessionStorage.setItem('token', token) : null; 
};
export const setGoogleToken = (token: string, storage = false) => { 
  googleToken = token; 
  storage ? sessionStorage.setItem('googleToken', token) : null; 
};


let authToken: string | null = null;
let googleToken: string | null = null;

const api = axios.create({
    baseURL: "http://localhost:3002",
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

const googleapi = axios.create({
    baseURL: "https://www.googleapis.com",
    headers: {
        "Content-Type": "application/json"
    }
});


googleapi.interceptors.request.use(
  (config) => {
    const gToken = getGoogleToken();
    if (gToken) {
      config.headers["Authorization"] = `Bearer ${gToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default api;
export { googleapi };