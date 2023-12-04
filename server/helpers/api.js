import fetch from "node-fetch";

const CONTENT_TYPE_HEADER_KEY = "Content-type";

const CONTENT_TYPES = {
  json: "application/json",
  html: "text/html",
};

const getJSONFromResponse = (response) => response.json();
const getTextFromResponse = (response) => response.text();
const handleError = (error) => console.log(error);
const sanitiseURL = (url) => encodeURI(url);

/**
 *
 * @param object response
 * @returns Promise<json|html>
 */
const getDataForRightContentType = (response) => {
  const contentTypeHeader = response.headers.get(CONTENT_TYPE_HEADER_KEY);

  let data;

  if (contentTypeHeader.includes(CONTENT_TYPES.json)) {
    data = getJSONFromResponse(response);
  } else if (contentTypeHeader.includes(CONTENT_TYPES.html)) {
    data = getTextFromResponse(response);
  }

  return data;
};

const callUrl = (url) =>
  fetch(sanitiseURL(url))
    .then((response) => getDataForRightContentType(response))
    .catch(handleError);

export { callUrl };
