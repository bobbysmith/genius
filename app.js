require('dotenv').config();

const axios = require('axios');

const API_URL = 'https://api.genius.com/';

axios.get(`${API_URL}search?q=cheddar`, {
  headers: { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` }
})
  .then((res) => {
    const {
      data: {
        response: {
          hits
        }
      }
    } = res;

    console.log(hits);
  })
  .catch(err => console.log(err));
