const fetch = require('node-fetch');

const getJSONFromResponse = response => response.json();
const handleError = error => console.log(error);
const sanitiseURL = url => encodeURI(url);

module.exports = {
  callUrl(url) {
    return fetch(sanitiseURL(url))
      .then(getJSONFromResponse)
      .catch(handleError)
    ;
  }
}