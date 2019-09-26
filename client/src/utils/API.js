import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("/user");
  },
  getUser: function (id) {
    return axios.get("/user/" + id);
  },
  deleteUser: function (id) {
    return axios.delete("/user/" + id);
  },
  saveUser: function (userData) {
    return axios.post("/user", userData);
  },
  updateUser: function (email, params) {
    return axios.put("/user/" + email, params)
  },
  login({ email, password }) {
    return axios.post("/user/signin", { email, password })
  },
  signup({ email, password }) {
    return axios.post("/user/signup", { email, password })
  },
  getPosts: function () {
    return axios.get("/posts");
  },
  savePost: function (postData) {
    return axios.post("/posts", postData)
  },
  getEvents: function () {
    return axios.get("/events");
  },
  saveEvent: function (eventData) {
    return axios.post("/events", eventData)
  },


};

