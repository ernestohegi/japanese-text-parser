const fetch = require('node-fetch');

const CONTENT_TYPE_HEADER_KEY = 'Content-type';

const CONTENT_TYPES = {
  json: 'application/json',
  html: 'text/html'
}

const getJSONFromResponse = response => response.json();
const getTextFromResponse = response => response.text();

/**
 *
 * @param object response
 * @returns Promise<json|html>
 */
const getDataForRightContentType = response => {
  const contentTypeHeader = response.headers.get(CONTENT_TYPE_HEADER_KEY);

  let data;

  if (contentTypeHeader.includes(CONTENT_TYPES.json)) {
    data = getJSONFromResponse(response);
  } else if (contentTypeHeader.includes(CONTENT_TYPES.html)) {
    data = getTextFromResponse(response);
  }

  return data;
}

const handleError = error => console.log(error);
const sanitiseURL = url => encodeURI(url);

module.exports = {
  /**
   *
   * @param string url
   * @return Promise
   */
  callUrl(url) {
    return fetch(sanitiseURL(url))
      .then(response => getDataForRightContentType(response))
      .catch(handleError)
    ;
  }
}