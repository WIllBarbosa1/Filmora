import axios from "axios";

const baseURL = 'https://sujeitoprogramador.com/r-api/?api=filmes';
const api = axios.create({ baseURL });

export default api;