const fetch = require("node-fetch")

const fetcher = async (url, method) => {
   const response = await fetch(url, { method })
   return await response.json();

}

module.exports = {
   fetcher
}