import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const createUserChat = (data) => API.post('/chat/', data);

export const userChats = (id, headers) => API.get(`/chat/${id}`, headers);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);