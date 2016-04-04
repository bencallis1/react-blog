import axios from 'axios'

export let getPosts = function (){
 return axios.get(`http://localhost:8080/api/blogData`)
     .then(function (data) {
       return data;
     })
     .catch(function (data) {
       console.log(data);
     });

};

export let getUserInfo = function (){
    return axios.get(`http://localhost:8080/api/userInfo`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            console.log(data);
        });

};


