import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getPosts: function(){
    return axios.get("/api/posts");
  },
  savePost: function(postData){
    return axios.post("/api/posts", postData)
  },
  getEvents: function(){
    return axios.get("/api/events");
  },
  saveEvent: function(eventData){
    return axios.post("/api/events", eventData)
  }
};

