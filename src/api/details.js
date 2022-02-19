import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.nobelprize.org/v1/prize.json'
})