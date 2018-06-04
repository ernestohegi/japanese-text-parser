import fetch from 'isomorphic-unfetch';

const HTTP_METHODS = {
  post: 'POST'
};

/**
 *
 * @param {string} url
 * @param {array} data
 */
export const postJsonData = (url, data) => {
  const fetchData = {
    method: HTTP_METHODS.post,
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  };

  return fetch(url, fetchData).then(response => response.json());
};
