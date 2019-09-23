import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/user");
  },
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  updateUser:function(id){
    return axios.patch("/api/user"+id)
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
  },




};

