// Importe o Axios
import axios from 'axios';

// Configure o Axios para permitir solicitações de qualquer origem
const api = axios.create({
  baseURL: global.IP_ADDRESS,
  withCredentials: true,
});

export default api;