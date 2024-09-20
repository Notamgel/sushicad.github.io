const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:4000";

async function fetchData(url, method, data) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${URL_BACKEND}/${url}`, options);
  return response.json();
}

export async function createResource(url, data) {
  return fetchData(url, "POST", data);
}

export async function getAllResources(url) {
  return fetchData(url, "GET");
}

export async function getResourceDetail(url, id) {
  return fetchData(`${url}/${id}`, "GET");
}

export async function deleteResource(url, id) {
  return fetchData(`${url}/${id}`, "DELETE");
}
