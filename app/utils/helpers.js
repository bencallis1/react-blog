import axios from 'axios'

export default function getPosts(){
 return axios.get(`http://localhost:8080/api/blogData`)
     .then(function (data) {
       return data;
     })
     .catch(function (data) {
       console.log(data);
     });

}

