import fetch from "isomorphic-unfetch";

export const postJsonData = (url, data) => {
  const fetchData = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  };

  return fetch(url, fetchData).then(response => response.json());
};
