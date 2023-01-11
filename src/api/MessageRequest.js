import axios from 'axios'


const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getMessages = (id, header) => API.get(`/message/${id}`, header);

export const addMessage = (data, header) => API.post('/message/', data, header);