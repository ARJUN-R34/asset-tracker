const axios = require('axios');

const getRequest = async (url) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getRequest };
