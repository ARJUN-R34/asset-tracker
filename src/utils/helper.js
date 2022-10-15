const axios = require('axios');

const chains = require('../chains');

const getRequest = async (url) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (err) {
    return err;
  }
};

const getApiURL = (chain, address, page, limit) => `${chains[chain].GET_TXN_LIST_API}&address=${address}&startblock=0&page=${page}&offset=${limit}&sort=asc`;

module.exports = { getRequest, getApiURL };
