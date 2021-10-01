import axios from 'axios';

export default axios.create({
    baseURL: 'https://imdb8.p.rapidapi.com/title/',
});
