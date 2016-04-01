import axios from 'axios'

export default function getImageInfo(){
  return axios.get(`https://api.flickr.com/services/feeds/photos_public.gne`);
}


