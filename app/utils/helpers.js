import axios from 'axios'

function getPosts(){
  return axios.get(`http://localhost:3030/messages`);
}

function getProfileInfo(){
  return axios.get(`http://localhost:3030/messages`);
}

export default function getUserInfo(){
  return axios.all([getPosts(), getProfileInfo()])
    .then((arr) => ({images: arr[0].data, bio: arr[1].data}))
}
