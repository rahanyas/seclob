import axios from 'axios';

 const baseURL = import.meta.env.VITE_NODE_ENV === "development" ? 'http://localhost:9000/api' : 'https://seclob.onrender.com/api';

 console.log(baseURL);
 
const axiosInstance = axios.create({
  baseURL : baseURL,
  withCredentials : true,
  headers : {
    'Content-Type' : 'application/json'
  }
});

export default axiosInstance