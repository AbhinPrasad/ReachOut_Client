import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const AdminLogin=(values) => API.post("/admin/login",values)

export const reportedPOstsAdmin = () => API.get("/posts/reported-posts")

export const postDeleteAdmin = (postId) => API.post("/posts/post-delete", { postId })

export const viewPostAdmin = (postId) => API.post("/admin/view-post", { postId })

export const blockUserAdmin = (userID) => API.post("/admin/block-user", { userID })

export const unBlockUserAdmin = (userID) => API.post("/admin/unblock-user", { userID })

export const usersDataAdmin = () => API.get("admin/get-users")