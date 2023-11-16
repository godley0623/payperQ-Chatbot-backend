require('dotenv').config({ path: '../.env' });
const axios = require('axios');
const apiKey = process.env.API_KEY;

console.log(apiKey);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://90e30d253f.d.voltageapp.io/api/v1/payments', req.body, {
        headers: { 'X-Api-Key': process.env.API_KEY, 'Content-type': 'application/json' }
      });
      console.log(response)
      res.status(201).send(response.data);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  } else {
    console.log(response)
    res.status(405).send({ error: 'Method Not Allowed' });
  }
};