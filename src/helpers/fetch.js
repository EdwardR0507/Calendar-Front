const baseUrl = process.env.REACT_APP_API_URL;

export const fetchUnauthorized = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; // localhost:4000/api/...
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; // localhost:4000/api/...
  const token = localStorage.getItem("token");
  if (method === "GET") {
    return fetch(url, {
      headers: {
        Authorization: token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
  }
};
