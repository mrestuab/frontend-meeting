import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8088/api", // ganti kalau port beda
});

// ENDPOINT MEETING
export const getMeetings = () => API.get("/meetings");
export const deleteMeeting = (id) => API.delete(`/meetings/${id}`);
export const getMeetingById = (id) => API.get(`/meetings/${id}`);
export const createMeeting = (data) => API.post("/meetings", data);
export const updateMeeting = (id, data) => API.put(`/meetings/${id}`, data);

export const getNotifications = () => API.get("/notifications");
export const getNotificationsById = (id) => API.get(`/notifications/${id}`);

export const getParticipants = () => API.get('/participants')