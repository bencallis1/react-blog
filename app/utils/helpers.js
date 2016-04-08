import axios from 'axios'

export let getPosts = function (){
 return axios.get(`http://localhost:8080/api/blogData`)
     .then(function (data) {
       return data;
     })
     .catch(function (data) {
         return data
     });

};

export let getUserInfo = function (id) {
    return axios.get(`http://localhost:8080/api/userInfo/${id}`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

};

export let usersBlogData = function () {
    return axios.get(`http://localhost:8080/api/usersBlogData`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
           return data
        });

};


