import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
   
  },
  headers: {
    'X-RapidAPI-Key':'7e5014d2f0msh98854a4d386f6b2p1e6fc2jsn61f3a5d26851',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchApi = async (url)=>{
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`,options)
       
        return data;
    } catch (error) {
        console.log(error);
    }
}
   

