import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css'
const api = axios.create({
  baseURL: process.env.VUE_APP_API_DOMAIN, // Use the API domain from the environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, set up an interceptor to add authorization or handle errors globally
api.interceptors.request.use((config) => {
  // Add auth token if needed
  const token = localStorage.getItem('auth_token'); // or use Vuex/state management
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
