import axios from "axios";


const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '72dc458125mshbd6dcc043743ccdp1fa986jsnf195e242d52e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchData = async (url)=>{
  const { data } = await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`, options)
  return data;
};

export default fetchData;

